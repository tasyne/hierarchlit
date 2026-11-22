import type { FrontendRenderer, FrontendRendererArgs } from "@streamlit/component-v2-lib";
import { StrictMode } from "react";
import { createRoot, type Root } from "react-dom/client";

import { Hierarchy } from "./Hierarchy";
import "./styles.css";
import type { HierarchyData, HierarchyState } from "./types";

const roots = new WeakMap<FrontendRendererArgs["parentElement"], Root>();

const renderHierarchy: FrontendRenderer<HierarchyState, HierarchyData> = (args) => {
  const { data, parentElement, setStateValue, setTriggerValue } = args;
  const rootElement = parentElement.querySelector(".hierarchlit-root");
  if (!(rootElement instanceof HTMLElement)) {
    throw new Error("hierarchlit: React root element was not found");
  }

  let root = roots.get(parentElement);
  if (!root) {
    root = createRoot(rootElement);
    roots.set(parentElement, root);
  }

  root.render(
    <StrictMode>
      <Hierarchy
        data={data}
        setStateValue={setStateValue}
        setTriggerValue={setTriggerValue}
      />
    </StrictMode>,
  );

  return () => {
    const currentRoot = roots.get(parentElement);
    currentRoot?.unmount();
    roots.delete(parentElement);
  };
};

export default renderHierarchy;
