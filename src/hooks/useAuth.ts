import { useQuery } from "@tanstack/react-query";
import { UserType } from "../types/User";

type ErrorResponse = {
  error: string;
};

const API_BASE_URL = import.meta.env.BASE_URL;

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
      // Try to refresh the token
      await fetchWithCredentials("/auth/refresh-token", {
        method: "POST",
      });

      // Retry getting user data after refresh
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
