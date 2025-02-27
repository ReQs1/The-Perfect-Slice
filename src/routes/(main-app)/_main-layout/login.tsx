import { createFileRoute } from "@tanstack/react-router";

const API_BASE_URL = import.meta.env.VITE_SERVER_URL;

export const Route = createFileRoute("/(main-app)/_main-layout/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex items-center justify-center flex-col w-full">
      <a
        href={`${API_BASE_URL}/auth/google`}
        className="flex items-center gap-2 rounded bg-white px-4 py-2 shadow hover:shadow-md"
      >
        <img src="/google-logo.svg" alt="Google Logo" className="h-5 w-5" />
        Sign in with Google
      </a>
    </div>
  );
}
