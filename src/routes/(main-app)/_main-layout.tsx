import { createFileRoute, Outlet } from "@tanstack/react-router";
import Header from "../../components/main-layout/header/header";
import { useAuth } from "../../hooks/useAuth";

export const Route = createFileRoute("/(main-app)/_main-layout")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data: userData, isLoading } = useAuth();

  return (
    <>
      <Header userData={userData} isLoading={isLoading} />

      <main className="flex grow">
        <Outlet />
      </main>
    </>
  );
}
