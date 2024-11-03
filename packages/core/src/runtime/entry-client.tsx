import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";

declare global {
  interface Window {
    __INITIAL_PROPS__: any;
    __PAGE_PATTERN__: string;
  }
}

if (typeof window !== "undefined" && typeof document !== "undefined") {
  const init = async () => {
    const pattern = window.__PAGE_PATTERN__;
    const props = window.__INITIAL_PROPS__;
    const root = document.getElementById("root")!;

    try {
      // normalize pattern to create correct import path
      const normalizedPattern =
        pattern === "/" ? "index" : pattern.replace(/^\//, "");

      // dynamic import using webpack magic comments
      const pageModule = await import(
        /* webpackIgnore: true */
        `./${normalizedPattern}.js`
      ).catch((e) => {
        console.error("Failed to load page module:", e);
        return { default: () => <div>Error loading page</div> };
      });

      const PageComponent = pageModule.default;

      // getServerSideProps가 있으면 hydrate, 없으면 일반 렌더링
      if (props) {
        hydrateRoot(root, <PageComponent {...props} />);
      } else {
        createRoot(root).render(<PageComponent />);
      }
    } catch (error) {
      console.error("Error mounting component:", error);
      createRoot(root).render(<div>Error loading page</div>);
    }
  };

  // DOMContentLoaded 이벤트 후에 마운트
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
}

export {};
