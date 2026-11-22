export type IconTone = "neutral" | "info" | "success" | "warning" | "danger";
export type SelectionMode = "single" | "multiple" | "none";
export type PaginationMode = "paged" | "load_more";

export interface StatusIconData {
  name: string;
  label: string;
  tone: IconTone;
}

export interface HierarchyNodeData {
  id: string;
  label: string;
  kind: string;
  expandable: boolean;
  icon: string | null;
  secondaryText: string | null;
  statusIcons: StatusIconData[];
  actions: string[];
  disabled: boolean;
  metadata: Record<string, unknown>;
}

export interface ActionData {
  id: string;
  label: string;
  icon: string | null;
  placement: "inline" | "menu";
  tone: IconTone;
  disabled: boolean;
}

export interface PageData {
  parentId: string | null;
  cursor: string | null;
  nodes: HierarchyNodeData[];
  nextCursor: string | null;
  totalCount: number | null;
  error: string | null;
}

export interface PaginationData {
  mode: PaginationMode;
  pageSize: number;
  maxCachedPages: number;
  maxBrowserNodes: number;
  rowHeight: number;
  overscan: number;
}

export interface ThemeData {
  accentColor: string | null;
  selectedBackground: string | null;
  hoverBackground: string | null;
  successColor: string | null;
  infoColor: string | null;
  warningColor: string | null;
  dangerColor: string | null;
}

export interface HierarchyData {
  pages: PageData[];
  actions: ActionData[];
  selectionMode: SelectionMode;
  cascadeSelection: boolean;
  rangeSelection: boolean;
  selectionToolbar: SelectionToolbarData | null;
  pagination: PaginationData;
  theme: ThemeData;
  height: number;
  emptyMessage: string;
  cacheLimited: boolean;
  initialSelectionRules: SelectionRuleData[];
  initialExpandedIds: string[];
}

export interface HierarchyState extends FrontendState {
  selection: SelectionStateData;
  expanded_ids: string[];
  page_request: PageRequestEvent;
  action: ActionEvent;
  selection_action: SelectionActionEvent;
  activated: ActivationEvent;
}

export interface SelectionRuleData {
  nodeId: string | null;
  selected: boolean;
  cascade: boolean;
  ancestorIds: string[];
  scope: "node" | "all";
}

export interface SelectionStateData {
  rules: SelectionRuleData[];
}

export interface SelectionToolbarData {
  actions: ActionData[];
  label: string;
  showClear: boolean;
  alwaysVisible: boolean;
  showSelectAll: boolean;
  selectAllLabel: string;
}

export interface PageRequestEvent {
  requestId: string;
  parentId: string | null;
  cursor: string | null;
  force?: boolean;
}

export interface ActionEvent {
  requestId: string;
  nodeId: string;
  actionId: string;
}

export interface SelectionActionEvent {
  requestId: string;
  actionId: string;
  rules: SelectionRuleData[];
}

export interface ActivationEvent {
  requestId: string;
  nodeId: string;
}

export type NodeRow = {
  type: "node";
  key: string;
  node: HierarchyNodeData;
  parentId: string | null;
  depth: number;
};

export type PageRow = {
  type: "page";
  key: string;
  parentId: string | null;
  depth: number;
  page: PageData | null;
  reason: "navigation" | "unloaded" | "error" | "limit";
};

export type FlatRow = NodeRow | PageRow;

import type { FrontendState } from "@streamlit/component-v2-lib";
