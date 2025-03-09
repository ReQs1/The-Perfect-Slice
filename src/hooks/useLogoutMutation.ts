import { fetchWithCredentials } from "@/utils/fetch-with-credentials";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useLogoutMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => {
      return fetchWithCredentials("/auth/logout", {
        method: "POST",
      });
    },
    onSuccess: () => {
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
