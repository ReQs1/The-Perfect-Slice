import { useAuth } from "@/hooks/useAuth";
import { createFileRoute, Navigate } from "@tanstack/react-router";

const API_BASE_URL = import.meta.env.VITE_SERVER_URL;

export const Route = createFileRoute("/(main-app)/_main-layout/login")({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        name: "description",
        content:
          "Sign in to Slice of Life Pizza Blog to comment, save recipes and join our pizza-loving community.",
      },
      { title: "Login | Slice of Life Pizza Blog" },
    ],
  }),
});

function RouteComponent() {
  const { data: user } = useAuth();

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex w-full flex-col items-center justify-center">
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
