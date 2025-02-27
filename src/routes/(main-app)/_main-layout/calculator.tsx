import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(main-app)/_main-layout/calculator")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div className="w-full flex justify-center">meow</div>;
}
