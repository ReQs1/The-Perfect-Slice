import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useLogoutMutation = (onSuccess?: () => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const res = await fetch(`${import.meta.env.BASE_URL}/auth/logout`, {
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
