import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const API_BASE_URL = import.meta.env.VITE_SERVER_URL;

export const useLogoutMutation = (onSuccess?: () => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const res = await fetch(`${API_BASE_URL}/auth/logout`, {
        method: "POST",
        credentials: "include",
      });

      if (!res.ok) throw new Error("Logout failed");

      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onSuccess: () => {
      onSuccess?.();
      queryClient.invalidateQueries({ queryKey: ["user"] });
      window.location.reload();
    },
    onError: () => {
      toast.error("Failed to logout", {
        position: "bottom-center",
      });
    },
  });
};
