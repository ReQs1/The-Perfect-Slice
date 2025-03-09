import { EditFormFields } from "@/components/main-layout/blog-post/comments/comments-list-components/edit-comment-form";
import { fetchWithCredentials } from "@/utils/fetch-with-credentials";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useEditComment(
  commendId: number,
  postId: string,
  onSuccess: () => void,
) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: EditFormFields) => {
      return fetchWithCredentials(`/api/comments/${commendId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", postId] });
      toast.success("comment edited", {
        position: "bottom-center",
      });
      onSuccess();
    },
    onError: () => {
      toast.error("couldn't edit your comment");
    },
  });
}
