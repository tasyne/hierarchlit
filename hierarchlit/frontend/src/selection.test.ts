import { describe, expect, it } from "vitest";

import {
  appendSelectionRule,
  appendVisibleRangeSelection,
  isAllSelected,
  isPartiallySelected,
  isSelected,
  parentMap,
} from "./selection";
import type { HierarchyNodeData, PageData, SelectionRuleData } from "./types";

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

const pages: PageData[] = [
  {
    parentId: null,
    cursor: null,
    nodes: [node("folder", true)],
    nextCursor: null,
    totalCount: 1,
    error: null,
  },
  {
    parentId: "folder",
    cursor: null,
    nodes: [node("child"), node("nested", true)],
    nextCursor: null,
    totalCount: 2,
    error: null,
  },
  {
    parentId: "nested",
    cursor: null,
    nodes: [node("grandchild")],
    nextCursor: null,
    totalCount: 1,
    error: null,
  },
];

describe("cascading selection", () => {
  it("selects loaded descendants and descendants from future pages", () => {
    const rules: SelectionRuleData[] = [
      { nodeId: "folder", selected: true, cascade: true, ancestorIds: [], scope: "node" },
    ];
    const parents = parentMap(pages);

    expect(isSelected("child", rules, parents)).toBe(true);
    expect(isSelected("grandchild", rules, parents)).toBe(true);

    const futureParents = new Map(parents).set("future-child", "folder");
    expect(isSelected("future-child", rules, futureParents)).toBe(true);
  });

  it("uses the most recent ancestor or child rule", () => {
    const parents = parentMap(pages);
    let rules: SelectionRuleData[] = [
      { nodeId: "folder", selected: true, cascade: true, ancestorIds: [], scope: "node" },
      {
        nodeId: "child",
        selected: false,
        cascade: false,
        ancestorIds: ["folder"],
        scope: "node",
      },
    ];
    expect(isSelected("child", rules, parents)).toBe(false);
    expect(isPartiallySelected("folder", pages, rules, parents)).toBe(true);

    rules = appendSelectionRule(rules, {
      nodeId: "folder",
      selected: true,
      cascade: true,
      ancestorIds: [],
      scope: "node",
    });
    expect(isSelected("child", rules, parents)).toBe(true);
    expect(isPartiallySelected("folder", pages, rules, parents)).toBe(false);
  });

  it("selects every loaded and future root from one global rule", () => {
    const rules: SelectionRuleData[] = [
      { nodeId: null, selected: true, cascade: true, ancestorIds: [], scope: "all" },
    ];
    const parents = parentMap(pages);

    expect(isAllSelected(rules)).toBe(true);
    expect(isSelected("folder", rules, parents)).toBe(true);
    expect(isSelected("grandchild", rules, parents)).toBe(true);
    expect(isSelected("future-root", rules, parents)).toBe(true);

    const withExclusion = appendSelectionRule(rules, {
      nodeId: "child",
      selected: false,
      cascade: false,
      ancestorIds: ["folder"],
      scope: "node",
    });
    expect(isSelected("child", withExclusion, parents)).toBe(false);
    expect(isAllSelected(withExclusion)).toBe(false);
  });

  it("adds a contiguous visible range without a new rule type", () => {
    const visible = [node("a"), node("b"), node("c"), node("d")];
    const parents = new Map(visible.map((item) => [item.id, null]));

    const rules = appendVisibleRangeSelection(
      [],
      visible,
      "b",
      "d",
      parents,
      false,
    );

    expect(rules?.map((rule) => rule.nodeId)).toEqual(["b", "c", "d"]);
    expect(rules?.every((rule) => rule.selected && !rule.cascade)).toBe(true);
  });

  it("keeps ranges compact when a selected container covers later rows", () => {
    const visible = [node("folder", true), node("child"), node("nested", true)];
    const parents = new Map<string, string | null>([
      ["folder", null],
      ["child", "folder"],
      ["nested", "folder"],
    ]);

    const rules = appendVisibleRangeSelection(
      [],
      visible,
      "folder",
      "nested",
      parents,
      true,
    );

    expect(rules).toEqual([
      {
        nodeId: "folder",
        selected: true,
        cascade: true,
        ancestorIds: [],
        scope: "node",
      },
    ]);
  });
});
