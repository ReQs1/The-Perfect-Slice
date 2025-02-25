import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/(dashboard)/_dashboard-layout/dashboard"
)({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/(dashboard)/_dashboard-layout/dashboard"!</div>;
}
