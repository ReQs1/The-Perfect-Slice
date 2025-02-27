import { useQuery } from "@tanstack/react-query";

export type UserType = {
  id: number;
  name: string;
  email: string;
  picture: string;
  is_admin: boolean;
};

type ErrorResponse = {
  error: string;
};

const API_BASE_URL = import.meta.env.VITE_SERVER_URL;

async function fetchWithCredentials<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    credentials: "include",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Request failed");
  }

  return data;
}

async function getUserData(): Promise<UserType> {
  try {
    const { user } = await fetchWithCredentials<{ user: UserType }>(
      "/auth/user"
    );
    return user;
  } catch (error) {
    if (
      error instanceof Error &&
      (error.message === "No token provided" || error.message === "jwt expired")
    ) {
      await fetchWithCredentials("/auth/refresh-token", {
        method: "POST",
      });

      const { user } = await fetchWithCredentials<{ user: UserType }>(
        "/auth/user"
      );
      return user;
    }

    throw error;
  }
}

export function useAuth() {
  return useQuery<UserType, ErrorResponse>({
    queryKey: ["user"],
    queryFn: getUserData,
    retry: false,
    staleTime: 5 * 60 * 1000,
  });
}
