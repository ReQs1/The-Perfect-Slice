import { useAuth } from "@/hooks/useAuth";
import { fetchWithCredentials } from "@/utils/fetch-with-credentials";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Heart } from "lucide-react";

export function LikeButton({
  likesCount,
  postId,
}: {
  likesCount: number | undefined;
  postId: string;
}) {
  const queryClient = useQueryClient();
  const { data: userData } = useAuth();
  const { mutate } = useMutation({
    mutationFn: () => {
      return fetchWithCredentials(`/api/posts/${postId}/like`, {
        method: "POST",
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [
          "postEngagement",
          postId,
          userData ? userData?.id : "anonymous",
        ],
      });
    },
  });

  return (
    <button
      className={`group flex items-center gap-1 text-gray-600 ${userData ? "cursor-pointer" : ""}`}
      onClick={() => {
        if (!userData) {
          return;
        }
        mutate();
      }}
    >
      <span>
        <Heart
          strokeWidth={1.5}
          size={20}
          className="transition-colors group-hover:text-red-500"
        />
      </span>
      {likesCount}
    </button>
  );
}

export function DisLikeButton({
  likesCount,
  postId,
}: {
  likesCount: number;
  postId: string;
}) {
  const queryClient = useQueryClient();
  const { data: userData } = useAuth();
  const { mutate } = useMutation({
    mutationFn: () => {
      return fetchWithCredentials(`/api/posts/${postId}/like`, {
        method: "DELETE",
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [
          "postEngagement",
          postId,
          userData ? userData?.id : "anonymous",
        ],
      });
    },
  });

  return (
    <button
      className="flex cursor-pointer items-center gap-1"
      onClick={() => mutate()}
    >
      <span>
        <Heart
          strokeWidth={1.5}
          size={20}
          className="hover:text-red-500"
          color={"#fb2c36"}
          fill={"#fb2c36"}
        />
      </span>
      {likesCount}
    </button>
  );
}
