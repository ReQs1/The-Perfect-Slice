import { createFileRoute } from "@tanstack/react-router";
import MainWrapper from "../../../components/main-layout/main-wrapper";

export const Route = createFileRoute("/(main-app)/_main-layout/about")({
  component: About,
});

function About() {
  return (
    <MainWrapper maxWidth="max-w-4xl">
      <p>meow</p>
    </MainWrapper>
  );
}
