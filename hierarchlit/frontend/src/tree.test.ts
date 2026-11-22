import { describe, expect, it } from "vitest";

import type { HierarchyNodeData, PageData } from "./types";
import { flattenTree } from "./tree";

const node = (id: string, expandable = false): HierarchyNodeData => ({
  id,
  label: id,
  kind: "item",
  expandable,
  icon: null,
  secondaryText: null,
  statusIcons: [],
  actions: [],
  disabled: false,
  metadata: {},
});

const page = (
  parentId: string | null,
  nodes: HierarchyNodeData[],
  nextCursor: string | null = null,
): PageData => ({
  parentId,
  cursor: null,
  nodes,
  nextCursor,
  totalCount: nodes.length,
  error: null,
});

describe("flattenTree", () => {
  it("includes only children of expanded nodes", () => {
    const pages = [page(null, [node("folder", true)]), page("folder", [node("child")])];
    expect(
      flattenTree({
        pages,
        expandedIds: new Set(),
        mode: "paged",
        hasPrevious: () => false,
        cacheLimited: false,
      }).map((row) => row.key),
    ).toEqual(["node:folder"]);

    expect(
      flattenTree({
        pages,
        expandedIds: new Set(["folder"]),
        mode: "paged",
        hasPrevious: () => false,
        cacheLimited: false,
      }).map((row) => row.key),
    ).toEqual(["node:folder", "node:child"]);
  });

  it("adds a paging row without materializing another page", () => {
    const rows = flattenTree({
      pages: [page(null, [node("one")], "next")],
      expandedIds: new Set(),
      mode: "paged",
      hasPrevious: () => false,
      cacheLimited: false,
    });
    expect(rows.map((row) => row.type)).toEqual(["node", "page"]);
  });

  it("adds an independent pager for a deeply nested parent", () => {
    const nestedPage = page("table", [node("object")], "next-objects");
    const rows = flattenTree({
      pages: [
        page(null, [node("namespace", true)]),
        page("namespace", [node("table", true)]),
        nestedPage,
      ],
      expandedIds: new Set(["namespace", "table"]),
      mode: "paged",
      hasPrevious: () => false,
      cacheLimited: false,
    });

    expect(rows.map((row) => row.key)).toEqual([
      "node:namespace",
      "node:table",
      "node:object",
      "page:table:first",
    ]);
    const pager = rows[3];
    expect(pager?.type === "page" ? pager.parentId : undefined).toBe("table");
  });
});
