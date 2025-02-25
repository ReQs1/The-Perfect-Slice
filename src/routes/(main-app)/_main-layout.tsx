import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/(main-app)/_main-layout")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <header className="flex gap-5">
        <Link to="/">Home page</Link>
        <Link to="/about">About</Link>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}
