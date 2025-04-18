import { createRootRoute, HeadContent, Outlet } from "@tanstack/react-router";
import GlobalNotFound from "../components/global-not-found";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <HeadContent />
      <Outlet />
      <ReactQueryDevtools />
    </>
  ),
  notFoundComponent: GlobalNotFound,
});
