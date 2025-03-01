import { createFileRoute } from "@tanstack/react-router";
import CalculatorInformation from "../../../components/main-layout/calculator/calculator-information";
import DoughInputPanel from "../../../components/main-layout/calculator/dough-input-panel";
import MainWrapper from "../../../components/main-layout/main-wrapper";

export const Route = createFileRoute("/(main-app)/_main-layout/calculator")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <MainWrapper maxWidth="max-w-2xl">
      <h1 className="mb-6 text-3xl font-bold">Pizza Dough Calculator</h1>
      <CalculatorInformation />

      <DoughInputPanel />
    </MainWrapper>
  );
}
