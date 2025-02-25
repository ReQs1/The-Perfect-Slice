import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/(dashboard)/_dashboard-layout")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <p>meow</p>
      <Outlet />
    </div>
  );
}
