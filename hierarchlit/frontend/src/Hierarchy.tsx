import type { FrontendRendererArgs } from "@streamlit/component-v2-lib";
import { useVirtualizer } from "@tanstack/react-virtual";
import { ChevronDown, ChevronRight, LoaderCircle, MoreHorizontal } from "lucide-react";
import {
  type CSSProperties,
  type KeyboardEvent,
  type MouseEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { Icon } from "./icons";
import {
  ancestorIds,
  appendSelectionRule,
  isAllSelected,
  isPartiallySelected,
  isSelected,
  parentMap,
} from "./selection";
import { flattenTree } from "./tree";
import type {
  ActionData,
  FlatRow,
  HierarchyData,
  HierarchyNodeData,
  HierarchyState,
  NodeRow as NodeRowData,
  PageData,
  PageRow as PageRowData,
  SelectionRuleData,
  SelectionToolbarData,
} from "./types";

type StreamlitBridge = Pick<
  FrontendRendererArgs<HierarchyState, HierarchyData>,
  "setStateValue" | "setTriggerValue"
>;

interface Props extends StreamlitBridge {
  data: HierarchyData;
}

const parentKey = (parentId: string | null): string => parentId ?? "__root__";

const requestId = (): string =>
  globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random()}`;

const sameStrings = (left: string[], right: string[]): boolean =>
  left.length === right.length && left.every((item, index) => item === right[index]);

const sameRules = (left: SelectionRuleData[], right: SelectionRuleData[]): boolean =>
  left.length === right.length &&
  left.every((rule, index) => {
    const other = right[index];
    return (
      other !== undefined &&
      rule.nodeId === other.nodeId &&
      rule.scope === other.scope &&
      rule.selected === other.selected &&
      rule.cascade === other.cascade &&
      sameStrings(rule.ancestorIds, other.ancestorIds)
    );
  });

export function Hierarchy({ data, setStateValue, setTriggerValue }: Props) {
  const [selectionRules, setSelectionRules] = useState<SelectionRuleData[]>(
    data.initialSelectionRules,
  );
  const [expandedIds, setExpandedIds] = useState<string[]>(data.initialExpandedIds);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [selectionMenuOpen, setSelectionMenuOpen] = useState(false);
  const [pendingParent, setPendingParent] = useState<string | null | undefined>(undefined);
  const [history, setHistory] = useState<Record<string, Array<string | null>>>({});
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelectionRules((current) =>
      sameRules(current, data.initialSelectionRules) ? current : data.initialSelectionRules,
    );
    setExpandedIds((current) =>
      sameStrings(current, data.initialExpandedIds) ? current : data.initialExpandedIds,
    );
    setPendingParent(undefined);
  }, [data.initialExpandedIds, data.initialSelectionRules, data.pages]);

  const expandedSet = useMemo(() => new Set(expandedIds), [expandedIds]);
  const parents = useMemo(() => parentMap(data.pages), [data.pages]);
  const actionMap = useMemo(
    () => new Map(data.actions.map((action) => [action.id, action])),
    [data.actions],
  );
  const hasPrevious = useCallback(
    (parentId: string | null) => (history[parentKey(parentId)]?.length ?? 0) > 0,
    [history],
  );
  const rows = useMemo(
    () =>
      flattenTree({
        pages: data.pages,
        expandedIds: expandedSet,
        mode: data.pagination.mode,
        hasPrevious,
        cacheLimited: data.cacheLimited,
      }),
    [data.cacheLimited, data.pages, data.pagination.mode, expandedSet, hasPrevious],
  );
  const nodeRows = useMemo(
    () => rows.filter((row): row is NodeRowData => row.type === "node"),
    [rows],
  );
  const selectedById = useMemo(
    () =>
      new Map(
        nodeRows.map((row) => [row.node.id, isSelected(row.node.id, selectionRules, parents)]),
      ),
    [nodeRows, parents, selectionRules],
  );
  const partialById = useMemo(
    () =>
      new Map(
        nodeRows
          .filter((row) => row.node.expandable)
          .map((row) => [
            row.node.id,
            isPartiallySelected(row.node.id, data.pages, selectionRules, parents),
          ]),
      ),
    [data.pages, nodeRows, parents, selectionRules],
  );
  const hasSelection = useMemo(
    () =>
      selectionRules.some(
        (rule) =>
          rule.selected &&
          (rule.scope === "all" ||
            (rule.nodeId !== null && isSelected(rule.nodeId, selectionRules, parents))),
      ),
    [parents, selectionRules],
  );

  useEffect(() => {
    if (activeId === null || !nodeRows.some((row) => row.node.id === activeId)) {
      setActiveId(nodeRows[0]?.node.id ?? null);
    }
  }, [activeId, nodeRows]);

  const virtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => scrollRef.current,
    estimateSize: () => data.pagination.rowHeight,
    overscan: data.pagination.overscan,
  });

  const requestPage = useCallback(
    (parentId: string | null, cursor: string | null, force = false): void => {
      setPendingParent(parentId);
      setTriggerValue("page_request", {
        requestId: requestId(),
        parentId,
        cursor,
        ...(force ? { force: true } : {}),
      });
    },
    [setTriggerValue],
  );

  const updateExpanded = useCallback(
    (node: HierarchyNodeData, expand?: boolean): void => {
      if (!node.expandable || node.disabled) return;
      const shouldExpand = expand ?? !expandedSet.has(node.id);
      const descendants = new Set<string>();
      if (!shouldExpand) {
        const queue = [node.id];
        while (queue.length > 0) {
          const parentId = queue.pop();
          if (!parentId) continue;
          for (const page of data.pages) {
            if (page.parentId !== parentId) continue;
            for (const child of page.nodes) {
              descendants.add(child.id);
              queue.push(child.id);
            }
          }
        }
      }
      const next = shouldExpand
        ? [...expandedIds.filter((id) => id !== node.id), node.id]
        : expandedIds.filter((id) => id !== node.id && !descendants.has(id));
      setExpandedIds(next);
      setStateValue("expanded_ids", next);
      if (shouldExpand && !data.pages.some((page) => page.parentId === node.id)) {
        setHistory((current) => ({ ...current, [parentKey(node.id)]: [] }));
        requestPage(node.id, null);
      }
    },
    [data.pages, expandedIds, expandedSet, requestPage, setStateValue],
  );

  const updateSelection = useCallback(
    (node: HierarchyNodeData, forceSelected?: boolean): void => {
      if (node.disabled || data.selectionMode === "none") return;
      let next: SelectionRuleData[];
      if (data.selectionMode === "single") {
        next = [
          {
            nodeId: node.id,
            selected: true,
            cascade: false,
            ancestorIds: ancestorIds(node.id, parents),
            scope: "node",
          },
        ];
      } else {
        const selected = selectedById.get(node.id) ?? false;
        const partial = partialById.get(node.id) ?? false;
        next = appendSelectionRule(selectionRules, {
          nodeId: node.id,
          selected: forceSelected ?? (partial ? true : !selected),
          cascade: data.cascadeSelection && node.expandable,
          ancestorIds: ancestorIds(node.id, parents),
          scope: "node",
        });
      }
      setSelectionRules(next);
      setStateValue("selection", { rules: next });
    },
    [
      data.cascadeSelection,
      data.selectionMode,
      partialById,
      parents,
      selectedById,
      selectionRules,
      setStateValue,
    ],
  );

  const activate = useCallback(
    (node: HierarchyNodeData): void => {
      if (node.disabled) return;
      setTriggerValue("activated", { requestId: requestId(), nodeId: node.id });
    },
    [setTriggerValue],
  );

  const runAction = useCallback(
    (event: MouseEvent, node: HierarchyNodeData, action: ActionData): void => {
      event.stopPropagation();
      if (node.disabled || action.disabled) return;
      setOpenMenuId(null);
      setTriggerValue("action", {
        requestId: requestId(),
        nodeId: node.id,
        actionId: action.id,
      });
    },
    [setTriggerValue],
  );

  const runSelectionAction = useCallback(
    (event: MouseEvent, action: ActionData): void => {
      event.stopPropagation();
      if (action.disabled || !hasSelection) return;
      setSelectionMenuOpen(false);
      setTriggerValue("selection_action", {
        requestId: requestId(),
        actionId: action.id,
        rules: selectionRules,
      });
    },
    [hasSelection, selectionRules, setTriggerValue],
  );

  const clearSelection = useCallback((): void => {
    setSelectionRules([]);
    setSelectionMenuOpen(false);
    setStateValue("selection", { rules: [] });
  }, [setStateValue]);

  const updateSelectAll = useCallback(
    (selected: boolean): void => {
      const next = selected
        ? appendSelectionRule(selectionRules, {
            nodeId: null,
            selected: true,
            cascade: true,
            ancestorIds: [],
            scope: "all",
          })
        : [];
      setSelectionRules(next);
      setStateValue("selection", { rules: next });
    },
    [selectionRules, setStateValue],
  );

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>): void => {
    if (nodeRows.length === 0) return;
    const currentIndex = Math.max(
      0,
      nodeRows.findIndex((row) => row.node.id === activeId),
    );
    const current = nodeRows[currentIndex];
    if (!current) return;

    const focusAt = (index: number): void => {
      const bounded = Math.max(0, Math.min(nodeRows.length - 1, index));
      const target = nodeRows[bounded];
      if (!target) return;
      setActiveId(target.node.id);
      const rowIndex = rows.findIndex((row) => row.key === target.key);
      if (rowIndex >= 0) virtualizer.scrollToIndex(rowIndex, { align: "auto" });
    };

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        focusAt(currentIndex + 1);
        break;
      case "ArrowUp":
        event.preventDefault();
        focusAt(currentIndex - 1);
        break;
      case "Home":
        event.preventDefault();
        focusAt(0);
        break;
      case "End":
        event.preventDefault();
        focusAt(nodeRows.length - 1);
        break;
      case "ArrowRight":
        if (current.node.expandable) {
          event.preventDefault();
          if (expandedSet.has(current.node.id)) focusAt(currentIndex + 1);
          else updateExpanded(current.node, true);
        }
        break;
      case "ArrowLeft":
        event.preventDefault();
        if (expandedSet.has(current.node.id)) {
          updateExpanded(current.node, false);
        } else if (current.parentId !== null) {
          const parentIndex = nodeRows.findIndex((row) => row.node.id === current.parentId);
          if (parentIndex >= 0) focusAt(parentIndex);
        }
        break;
      case "Enter":
        event.preventDefault();
        activate(current.node);
        break;
      case " ":
        event.preventDefault();
        updateSelection(current.node);
        break;
    }
  };

  const navigateNext = (row: PageRowData): void => {
    const nextCursor = row.page?.nextCursor;
    if (nextCursor === null || nextCursor === undefined || data.cacheLimited) return;
    if (data.pagination.mode === "paged") {
      const key = parentKey(row.parentId);
      setHistory((current) => ({
        ...current,
        [key]: [...(current[key] ?? []), row.page?.cursor ?? null],
      }));
    }
    requestPage(row.parentId, nextCursor);
  };

  const navigatePrevious = (row: PageRowData): void => {
    const key = parentKey(row.parentId);
    const cursors = history[key] ?? [];
    const previousCursor = cursors[cursors.length - 1];
    if (previousCursor === undefined) return;
    setHistory((current) => ({ ...current, [key]: cursors.slice(0, -1) }));
    requestPage(row.parentId, previousCursor);
  };

  const virtualRows = virtualizer.getVirtualItems();
  const isEmpty = rows.length === 0;
  const themeStyle = {
    "--hierarchlit-accent-color": data.theme.accentColor ?? undefined,
    "--hierarchlit-selected-background": data.theme.selectedBackground ?? undefined,
    "--hierarchlit-hover-background": data.theme.hoverBackground ?? undefined,
    "--hierarchlit-success-color": data.theme.successColor ?? undefined,
    "--hierarchlit-info-color": data.theme.infoColor ?? undefined,
    "--hierarchlit-warning-color": data.theme.warningColor ?? undefined,
    "--hierarchlit-danger-color": data.theme.dangerColor ?? undefined,
  } as CSSProperties;

  return (
    <div className="hierarchy-shell" style={{ height: data.height, ...themeStyle }}>
      {data.selectionToolbar &&
      (data.selectionToolbar.alwaysVisible ||
        data.selectionToolbar.showSelectAll ||
        hasSelection) ? (
        <SelectionToolbar
          config={data.selectionToolbar}
          hasSelection={hasSelection}
          ruleCount={selectionRules.length}
          allSelected={isAllSelected(selectionRules)}
          menuOpen={selectionMenuOpen}
          onMenu={() => {
            setOpenMenuId(null);
            setSelectionMenuOpen((current) => !current);
          }}
          onAction={runSelectionAction}
          onClear={clearSelection}
          onSelectAll={updateSelectAll}
        />
      ) : null}
      {isEmpty ? (
        <div className="empty-state">{data.emptyMessage}</div>
      ) : (
        <div
          ref={scrollRef}
          className="tree-scroll"
          role="tree"
          aria-label="Hierarchy"
          aria-multiselectable={data.selectionMode === "multiple"}
          aria-activedescendant={
            activeId === null
              ? undefined
              : `hierarchlit-row-${nodeRows.findIndex((row) => row.node.id === activeId)}`
          }
          tabIndex={0}
          onKeyDown={onKeyDown}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setOpenMenuId(null);
          }}
        >
          <div className="virtual-space" style={{ height: virtualizer.getTotalSize() }}>
            {virtualRows.map((virtualRow) => {
              const row = rows[virtualRow.index];
              if (!row) return null;
              return (
                <div
                  key={row.key}
                  className={`virtual-row${
                    row.type === "node" && openMenuId === row.node.id
                      ? " has-open-menu"
                      : ""
                  }`}
                  style={{
                    height: virtualRow.size,
                    transform: `translateY(${virtualRow.start}px)`,
                  }}
                >
                  {row.type === "node" ? (
                    <NodeRow
                      row={row}
                      nodeIndex={nodeRows.findIndex((item) => item.node.id === row.node.id)}
                      rowHeight={data.pagination.rowHeight}
                      selected={selectedById.get(row.node.id) ?? false}
                      indeterminate={partialById.get(row.node.id) ?? false}
                      active={activeId === row.node.id}
                      expanded={expandedSet.has(row.node.id)}
                      selectionMode={data.selectionMode}
                      actionMap={actionMap}
                      menuOpen={openMenuId === row.node.id}
                      onActive={() => setActiveId(row.node.id)}
                      onSelect={(selected) => updateSelection(row.node, selected)}
                      onExpand={() => updateExpanded(row.node)}
                      onActivate={() => activate(row.node)}
                      onMenu={() => {
                        setSelectionMenuOpen(false);
                        setOpenMenuId((current) =>
                          current === row.node.id ? null : row.node.id,
                        );
                      }}
                      onAction={(event, action) => runAction(event, row.node, action)}
                    />
                  ) : (
                    <PageRow
                      row={row}
                      mode={data.pagination.mode}
                      pageNumber={(history[parentKey(row.parentId)]?.length ?? 0) + 1}
                      pending={pendingParent === row.parentId}
                      onNext={() => navigateNext(row)}
                      onPrevious={() => navigatePrevious(row)}
                      onLoad={() => requestPage(row.parentId, row.page?.cursor ?? null, true)}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

interface SelectionToolbarProps {
  config: SelectionToolbarData;
  hasSelection: boolean;
  ruleCount: number;
  allSelected: boolean;
  menuOpen: boolean;
  onMenu: () => void;
  onAction: (event: MouseEvent, action: ActionData) => void;
  onClear: () => void;
  onSelectAll: (selected: boolean) => void;
}

function SelectionToolbar({
  config,
  hasSelection,
  ruleCount,
  allSelected,
  menuOpen,
  onMenu,
  onAction,
  onClear,
  onSelectAll,
}: SelectionToolbarProps) {
  const inlineActions = config.actions.filter((action) => action.placement === "inline");
  const menuActions = config.actions.filter((action) => action.placement === "menu");

  return (
    <div className="selection-toolbar" role="toolbar" aria-label={config.label}>
      {config.showSelectAll ? (
        <label className="selection-select-all">
          <input
            className="selection-box"
            type="checkbox"
            checked={allSelected}
            ref={(element) => {
              if (element) element.indeterminate = hasSelection && !allSelected;
            }}
            onChange={(event) => onSelectAll(event.currentTarget.checked)}
          />
          <span>{config.selectAllLabel}</span>
        </label>
      ) : null}
      <span className="selection-toolbar-label">{config.label}</span>
      <span className="selection-toolbar-count">
        {hasSelection
          ? `${ruleCount} selection ${ruleCount === 1 ? "rule" : "rules"}`
          : "No selection"}
      </span>
      <span className="selection-toolbar-spacer" />
      {inlineActions.map((action) => (
        <button
          key={action.id}
          className={`selection-action-button tone-${action.tone}`}
          type="button"
          disabled={!hasSelection || action.disabled}
          onClick={(event) => onAction(event, action)}
        >
          <Icon name={action.icon} size={14} />
          <span>{action.label}</span>
        </button>
      ))}
      {menuActions.length > 0 ? (
        <span className="selection-menu-wrap">
          <button
            className="icon-button"
            type="button"
            aria-label={`More ${config.label.toLowerCase()} actions`}
            aria-haspopup="menu"
            aria-expanded={menuOpen}
            disabled={!hasSelection}
            onClick={onMenu}
          >
            <MoreHorizontal aria-hidden size={16} />
          </button>
          {menuOpen ? (
            <span
              className="action-menu selection-action-menu"
              role="menu"
              onPointerDown={(event) => event.stopPropagation()}
              onMouseDown={(event) => event.stopPropagation()}
              onClick={(event) => event.stopPropagation()}
            >
              {menuActions.map((action) => (
                <button
                  key={action.id}
                  className={`menu-item tone-${action.tone}`}
                  type="button"
                  role="menuitem"
                  disabled={!hasSelection || action.disabled}
                  onClick={(event) => onAction(event, action)}
                >
                  <Icon name={action.icon} size={14} />
                  <span>{action.label}</span>
                </button>
              ))}
            </span>
          ) : null}
        </span>
      ) : null}
      {config.showClear ? (
        <button
          className="selection-clear-button"
          type="button"
          disabled={!hasSelection}
          onClick={onClear}
        >
          Clear
        </button>
      ) : null}
    </div>
  );
}

interface NodeRowProps {
  row: NodeRowData;
  nodeIndex: number;
  rowHeight: number;
  selected: boolean;
  indeterminate: boolean;
  active: boolean;
  expanded: boolean;
  selectionMode: HierarchyData["selectionMode"];
  actionMap: ReadonlyMap<string, ActionData>;
  menuOpen: boolean;
  onActive: () => void;
  onSelect: (selected?: boolean) => void;
  onExpand: () => void;
  onActivate: () => void;
  onMenu: () => void;
  onAction: (event: MouseEvent, action: ActionData) => void;
}

function NodeRow({
  row,
  nodeIndex,
  rowHeight,
  selected,
  indeterminate,
  active,
  expanded,
  selectionMode,
  actionMap,
  menuOpen,
  onActive,
  onSelect,
  onExpand,
  onActivate,
  onMenu,
  onAction,
}: NodeRowProps) {
  const inlineActions = row.node.actions
    .map((id) => actionMap.get(id))
    .filter((action): action is ActionData => action?.placement === "inline");
  const menuActions = row.node.actions
    .map((id) => actionMap.get(id))
    .filter((action): action is ActionData => action?.placement === "menu");
  const mainIcon = row.node.icon ?? (row.node.expandable ? (expanded ? "folder-open" : "folder") : "file");

  return (
    <div
      id={`hierarchlit-row-${nodeIndex}`}
      className={`tree-row${selected ? " is-selected" : ""}${active ? " is-active" : ""}${row.node.disabled ? " is-disabled" : ""}`}
      style={{ minHeight: rowHeight, paddingLeft: 4 + row.depth * 16 }}
      role="treeitem"
      aria-level={row.depth + 1}
      aria-selected={selectionMode === "none" ? undefined : selected}
      aria-expanded={row.node.expandable ? expanded : undefined}
      aria-disabled={row.node.disabled || undefined}
      onMouseDown={onActive}
      onClick={() => onSelect()}
      onDoubleClick={onActivate}
    >
      <button
        className="disclosure icon-button"
        type="button"
        tabIndex={-1}
        aria-label={expanded ? `Collapse ${row.node.label}` : `Expand ${row.node.label}`}
        disabled={!row.node.expandable || row.node.disabled}
        onClick={(event) => {
          event.stopPropagation();
          onExpand();
        }}
      >
        {row.node.expandable ? (
          expanded ? <ChevronDown aria-hidden size={14} /> : <ChevronRight aria-hidden size={14} />
        ) : null}
      </button>
      {selectionMode === "multiple" ? (
        <input
          className="selection-box"
          type="checkbox"
          tabIndex={-1}
          aria-label={`Select ${row.node.label}`}
          checked={selected}
          ref={(element) => {
            if (element) element.indeterminate = indeterminate;
          }}
          disabled={row.node.disabled}
          onChange={(event) =>
            onSelect(indeterminate ? true : event.currentTarget.checked)
          }
          onClick={(event) => event.stopPropagation()}
        />
      ) : null}
      <span className="node-icon"><Icon name={mainIcon} /></span>
      <span className="node-label" title={row.node.label}>{row.node.label}</span>
      {row.node.secondaryText ? (
        <span className="secondary-text" title={row.node.secondaryText}>{row.node.secondaryText}</span>
      ) : null}
      <span className="row-spacer" />
      <span className="status-list">
        {row.node.statusIcons.map((status, index) => (
          <span
            key={`${status.name}:${status.label}:${index}`}
            className={`status-icon tone-${status.tone}`}
            title={status.label}
            aria-label={status.label}
          >
            <Icon name={status.name} size={14} />
          </span>
        ))}
      </span>
      <span className="inline-actions">
        {inlineActions.map((action) => (
          <button
            key={action.id}
            className={`icon-button action-button tone-${action.tone}`}
            type="button"
            tabIndex={-1}
            title={action.label}
            aria-label={`${action.label}: ${row.node.label}`}
            disabled={action.disabled || row.node.disabled}
            onClick={(event) => onAction(event, action)}
          >
            <Icon name={action.icon} size={14} />
          </button>
        ))}
      </span>
      {menuActions.length > 0 ? (
        <span className="menu-wrap">
          <button
            className="icon-button more-button"
            type="button"
            tabIndex={-1}
            aria-label={`More actions for ${row.node.label}`}
            aria-haspopup="menu"
            aria-expanded={menuOpen}
            disabled={row.node.disabled}
            onClick={(event) => {
              event.stopPropagation();
              onMenu();
            }}
          >
            <MoreHorizontal aria-hidden size={15} />
          </button>
          {menuOpen ? (
            <span
              className="action-menu"
              role="menu"
              onPointerDown={(event) => event.stopPropagation()}
              onMouseDown={(event) => event.stopPropagation()}
              onClick={(event) => event.stopPropagation()}
            >
              {menuActions.map((action) => (
                <button
                  key={action.id}
                  className={`menu-item tone-${action.tone}`}
                  type="button"
                  role="menuitem"
                  disabled={action.disabled}
                  onClick={(event) => onAction(event, action)}
                >
                  <Icon name={action.icon} size={14} />
                  <span>{action.label}</span>
                </button>
              ))}
            </span>
          ) : null}
        </span>
      ) : null}
    </div>
  );
}

interface PageRowProps {
  row: PageRowData;
  mode: HierarchyData["pagination"]["mode"];
  pageNumber: number;
  pending: boolean;
  onNext: () => void;
  onPrevious: () => void;
  onLoad: () => void;
}

function PageRow({ row, mode, pageNumber, pending, onNext, onPrevious, onLoad }: PageRowProps) {
  const inset = 8 + row.depth * 16;
  if (pending) {
    return <div className="page-row muted" style={{ paddingLeft: inset }}><LoaderCircle className="spin" size={14} /> Loading…</div>;
  }
  if (row.reason === "limit") {
    return <div className="page-row warning" style={{ paddingLeft: inset }}>Browser item limit reached. Collapse another folder or increase the configured limit.</div>;
  }
  if (row.reason === "error") {
    return (
      <div className="page-row error" style={{ paddingLeft: inset }}>
        <span>{row.page?.error ?? "Unable to load items."}</span>
        <button type="button" onClick={onLoad}>Retry</button>
      </div>
    );
  }
  if (row.reason === "unloaded") {
    return <div className="page-row" style={{ paddingLeft: inset }}><button type="button" onClick={onLoad}>Load items</button></div>;
  }
  if (mode === "load_more") {
    return <div className="page-row" style={{ paddingLeft: inset }}><button type="button" onClick={onNext}>Load more</button></div>;
  }
  return (
    <div className="page-row pager" style={{ paddingLeft: inset }}>
      <button type="button" disabled={pageNumber <= 1} onClick={onPrevious}>Previous</button>
      <span>Page {pageNumber}{row.page?.totalCount === null ? "" : ` · ${row.page?.totalCount} items`}</span>
      <button type="button" disabled={row.page?.nextCursor === null} onClick={onNext}>Next</button>
    </div>
  );
}
