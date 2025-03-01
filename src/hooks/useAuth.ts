import { useQuery } from "@tanstack/react-query";
import { fetchWithCredentials } from "../utils/fetch-with-credentials";

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

async function getUserData(): Promise<UserType> {
  try {
    const { user } = await fetchWithCredentials<{ user: UserType }>(
      "/auth/user",
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
        "/auth/user",
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
