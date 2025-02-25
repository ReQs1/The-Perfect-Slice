import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(main-app)/_main-layout/")({
  component: Index,
});

function Index() {
  return <div className="p-2">woof woof</div>;
}
