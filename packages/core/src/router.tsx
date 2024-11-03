// router.ts
import { useEffect, useState, useContext, createContext } from "react";

interface RouterState {
  pathname: string;
  query: Record<string, string>;
  params: Record<string, string>;
  isReady: boolean;
  push: (url: string) => void;
  replace: (url: string) => void;
  back: () => void;
}

const RouterContext = createContext<RouterState | null>(null);

export function createPolarisRouter(initialPath: string, pagePattern: string) {
  // [...slug].tsx -> /^\/(.+)$/
  // [id].tsx -> /^\/([^/]+)$/
  // nested/[...params].tsx -> /^\/nested\/(.+)$/
  function patternToRegex(pattern: string): RegExp {
    return new RegExp(
      "^" +
        pattern
          .replace(/\[\.\.\.(\w+)\]/g, "(.+)") // [...slug] -> (.+)
          .replace(/\[(\w+)\]/g, "([^/]+)") // [id] -> ([^/]+)
          .replace(/\//g, "\\/") + // / -> \/
        "$"
    );
  }

  function extractParams(
    path: string,
    pattern: string
  ): Record<string, string> {
    const regex = patternToRegex(pattern);
    const paramNames = [...pattern.matchAll(/\[(?:\.\.\.)?(\w+)\]/g)].map(
      (match) => match[1]
    );
    const matches = path.match(regex);

    if (!matches) return {};

    return paramNames.reduce(
      (params, name, index) => {
        if (!name) return params;
        else {
          params[name] = matches[index + 1] as string;
        }
        return params;
      },
      {} as Record<string, string>
    );
  }

  function parseQuery(search: string): Record<string, string> {
    return Object.fromEntries(new URLSearchParams(search).entries());
  }

  function useRouter(): RouterState {
    const context = useContext(RouterContext);
    if (!context) {
      throw new Error("useRouter must be used within a RouterProvider");
    }
    return context;
  }

  function RouterProvider({ children }: { children: React.ReactNode }) {
    const [state, setState] = useState<RouterState>(() => {
      const url = new URL(initialPath, window.location.origin);
      return {
        pathname: url.pathname,
        query: parseQuery(url.search),
        params: extractParams(url.pathname, pagePattern),
        isReady: false,
        push: (url: string) => {},
        replace: (url: string) => {},
        back: () => {},
      };
    });

    useEffect(() => {
      const handleRouteChange = () => {
        const url = new URL(window.location.href);
        setState((prev) => ({
          ...prev,
          pathname: url.pathname,
          query: parseQuery(url.search),
          params: extractParams(url.pathname, pagePattern),
          isReady: true,
        }));
      };

      // Initial route change
      handleRouteChange();

      window.addEventListener("popstate", handleRouteChange);
      return () => window.removeEventListener("popstate", handleRouteChange);
    }, []);

    const push = (url: string) => {
      window.history.pushState({}, "", url);
      const event = new PopStateEvent("popstate");
      window.dispatchEvent(event);
    };

    const replace = (url: string) => {
      window.history.replaceState({}, "", url);
      const event = new PopStateEvent("popstate");
      window.dispatchEvent(event);
    };

    const back = () => {
      window.history.back();
    };

    return (
      <RouterContext.Provider value={{ ...state, push, replace, back }}>
        {children}
      </RouterContext.Provider>
    );
  }

  return { useRouter, RouterProvider };
}
