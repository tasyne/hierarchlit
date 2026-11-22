import type { HierarchyNodeData, PageData, SelectionRuleData } from "./types";

export function parentMap(pages: PageData[]): Map<string, string | null> {
  const result = new Map<string, string | null>();
  for (const page of pages) {
    for (const node of page.nodes) result.set(node.id, page.parentId);
  }
  return result;
}

export function isSelected(
  nodeId: string,
  rules: readonly SelectionRuleData[],
  parents: ReadonlyMap<string, string | null>,
): boolean {
  const ancestors = new Set<string>();
  const visited = new Set<string>();
  let parentId = parents.get(nodeId);
  while (parentId !== null && parentId !== undefined && !visited.has(parentId)) {
    ancestors.add(parentId);
    visited.add(parentId);
    parentId = parents.get(parentId);
  }

  for (let index = rules.length - 1; index >= 0; index -= 1) {
    const rule = rules[index];
    if (!rule) continue;
    if (
      rule.scope === "all" ||
      rule.nodeId === nodeId ||
      (rule.cascade && rule.nodeId !== null && ancestors.has(rule.nodeId))
    ) {
      return rule.selected;
    }
  }
  return false;
}

export function ancestorIds(
  nodeId: string,
  parents: ReadonlyMap<string, string | null>,
): string[] {
  const result: string[] = [];
  const visited = new Set<string>();
  let parentId = parents.get(nodeId);
  while (parentId !== null && parentId !== undefined && !visited.has(parentId)) {
    result.push(parentId);
    visited.add(parentId);
    parentId = parents.get(parentId);
  }
  return result.reverse();
}

export function descendantIds(nodeId: string, pages: PageData[]): string[] {
  const children = new Map<string, string[]>();
  for (const page of pages) {
    if (page.parentId === null) continue;
    const ids = children.get(page.parentId) ?? [];
    ids.push(...page.nodes.map((node) => node.id));
    children.set(page.parentId, ids);
  }

  const result: string[] = [];
  const visited = new Set<string>();
  const queue = [...(children.get(nodeId) ?? [])];
  while (queue.length > 0) {
    const childId = queue.pop();
    if (!childId || visited.has(childId)) continue;
    visited.add(childId);
    result.push(childId);
    queue.push(...(children.get(childId) ?? []));
  }
  return result;
}

export function isPartiallySelected(
  nodeId: string,
  pages: PageData[],
  rules: readonly SelectionRuleData[],
  parents: ReadonlyMap<string, string | null>,
): boolean {
  const states = [nodeId, ...descendantIds(nodeId, pages)].map((id) =>
    isSelected(id, rules, parents),
  );
  return states.some(Boolean) && states.some((selected) => !selected);
}

export function appendSelectionRule(
  rules: readonly SelectionRuleData[],
  rule: SelectionRuleData,
): SelectionRuleData[] {
  return [
    ...rules.filter(
      (candidate) =>
        candidate.scope !== rule.scope ||
        (rule.scope === "node" && candidate.nodeId !== rule.nodeId),
    ),
    rule,
  ];
}

export function appendVisibleRangeSelection(
  rules: readonly SelectionRuleData[],
  visibleNodes: readonly HierarchyNodeData[],
  anchorId: string,
  targetId: string,
  parents: ReadonlyMap<string, string | null>,
  cascadeSelection: boolean,
): SelectionRuleData[] | null {
  const anchorIndex = visibleNodes.findIndex((node) => node.id === anchorId);
  const targetIndex = visibleNodes.findIndex((node) => node.id === targetId);
  if (anchorIndex < 0 || targetIndex < 0) return null;

  const start = Math.min(anchorIndex, targetIndex);
  const end = Math.max(anchorIndex, targetIndex);
  let next = [...rules];
  for (const node of visibleNodes.slice(start, end + 1)) {
    if (node.disabled || isSelected(node.id, next, parents)) continue;
    next = appendSelectionRule(next, {
      nodeId: node.id,
      selected: true,
      cascade: cascadeSelection && node.expandable,
      ancestorIds: ancestorIds(node.id, parents),
      scope: "node",
    });
  }
  return next;
}

export function isAllSelected(rules: readonly SelectionRuleData[]): boolean {
  let globalIndex = -1;
  for (let index = rules.length - 1; index >= 0; index -= 1) {
    if (rules[index]?.scope === "all") {
      globalIndex = index;
      break;
    }
  }
  if (globalIndex < 0 || !rules[globalIndex]?.selected) return false;

  return !rules.slice(globalIndex + 1).some((target) => {
    if (target.scope !== "node" || target.nodeId === null) return false;
    const ancestors = new Set(target.ancestorIds);
    for (let index = rules.length - 1; index >= 0; index -= 1) {
      const candidate = rules[index];
      if (!candidate) continue;
      if (
        candidate.scope === "all" ||
        candidate.nodeId === target.nodeId ||
        (candidate.cascade &&
          candidate.nodeId !== null &&
          ancestors.has(candidate.nodeId))
      ) {
        return !candidate.selected;
      }
    }
    return true;
  });
}
