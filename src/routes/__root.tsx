import { createRootRoute, Outlet } from "@tanstack/react-router";
import GlobalNotFound from "../components/global-not-found";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <ReactQueryDevtools />
    </>
  ),
  notFoundComponent: GlobalNotFound,
});
