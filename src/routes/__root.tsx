import { createRootRoute, Outlet } from "@tanstack/react-router";
import React from "react";
import GlobalNotFound from "../components/global-not-found";

const TanStackRouterDevtools =
  import.meta.env.NODE_ENV === "production"
    ? () => null
    : React.lazy(() =>
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
        }))
      );

export const Route = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
  notFoundComponent: GlobalNotFound,
});
