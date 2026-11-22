import type { FlatRow, PageData, PaginationMode } from "./types";

const parentKey = (parentId: string | null): string => parentId ?? "__root__";

export function pagesByParent(pages: PageData[]): Map<string, PageData[]> {
  const result = new Map<string, PageData[]>();
  for (const page of pages) {
    const key = parentKey(page.parentId);
    const siblings = result.get(key) ?? [];
    siblings.push(page);
    result.set(key, siblings);
  }
  return result;
}

export interface FlattenOptions {
  pages: PageData[];
  expandedIds: ReadonlySet<string>;
  mode: PaginationMode;
  hasPrevious: (parentId: string | null) => boolean;
  cacheLimited: boolean;
}

export function flattenTree(options: FlattenOptions): FlatRow[] {
  const grouped = pagesByParent(options.pages);
  const rows: FlatRow[] = [];
  const visited = new Set<string>();

  const visit = (parentId: string | null, depth: number): void => {
    const pages = grouped.get(parentKey(parentId));
    if (!pages || pages.length === 0) {
      if (parentId !== null) {
        rows.push({
          type: "page",
          key: `unloaded:${parentId}`,
          parentId,
          depth,
          page: null,
          reason: options.cacheLimited ? "limit" : "unloaded",
        });
      }
      return;
    }

    for (const page of pages) {
      if (page.error) {
        rows.push({
          type: "page",
          key: `error:${parentKey(parentId)}:${page.cursor ?? "first"}`,
          parentId,
          depth,
          page,
          reason: "error",
        });
        continue;
      }

      for (const node of page.nodes) {
        // A malformed provider cannot make recursive or duplicate IDs lock up the UI.
        if (visited.has(node.id)) continue;
        visited.add(node.id);
        rows.push({
          type: "node",
          key: `node:${node.id}`,
          node,
          parentId,
          depth,
        });
        if (node.expandable && options.expandedIds.has(node.id)) {
          visit(node.id, depth + 1);
        }
      }
    }

    const lastPage = pages[pages.length - 1];
    if (!lastPage || lastPage.error) return;
    const navigable =
      lastPage.nextCursor !== null ||
      (options.mode === "paged" && options.hasPrevious(parentId));
    if (navigable) {
      rows.push({
        type: "page",
        key: `page:${parentKey(parentId)}:${lastPage.cursor ?? "first"}`,
        parentId,
        depth,
        page: lastPage,
        reason:
          options.cacheLimited && options.mode === "load_more" ? "limit" : "navigation",
      });
    }
  };

  visit(null, 0);
  return rows;
}
