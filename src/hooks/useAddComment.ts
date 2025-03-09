import { FormFields } from "@/components/main-layout/blog-post/comments/comments-new-comment-form";
import { fetchWithCredentials } from "@/utils/fetch-with-credentials";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useAddComment(postId: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: FormFields) => {
      return fetchWithCredentials(`/api/posts/${postId}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", postId] });
      toast.success("comment added", {
        position: "bottom-center",
      });
    },
    onError: () => {
      toast.error("couldn't add your comment");
    },
  });
}
