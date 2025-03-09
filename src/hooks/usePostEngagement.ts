import { useQuery } from "@tanstack/react-query";
import { fetchWithCredentials } from "../utils/fetch-with-credentials";
import { useAuth } from "./useAuth";

type EngagementCounts = {
  likesCount: number;
  commentsCount: number;
  isLikedByUser: boolean;
};

export function usePostEngagement(postId: string): {
  data: EngagementCounts | undefined;
  isLoading: boolean;
  error: Error | null;
} {
  const { data: userData } = useAuth();

  const fetchEngagementData = async (): Promise<EngagementCounts> => {
    const likesResponse = await fetchWithCredentials<{ likesCount: number }>(
      `/api/posts/${postId}/likes-count`,
    );

    const commentsResponse = await fetchWithCredentials<{
      commentsCount: number;
    }>(`/api/posts/${postId}/comments-count`);

    let isLikedByUser = false;

    if (userData) {
      const userLikesResponse = await fetchWithCredentials<
        Array<{ post_id: string }>
      >(`/api/user/liked-posts`);
      isLikedByUser = userLikesResponse.some((post) => post.post_id === postId);
    }

    return {
      likesCount: likesResponse.likesCount,
      commentsCount: commentsResponse.commentsCount,
      isLikedByUser,
    };
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["postEngagement", postId, userData ? userData?.id : "anonymous"],
    queryFn: fetchEngagementData,
    staleTime: 5 * 60 * 1000, // 5 minutes before data is considered stale
    refetchOnWindowFocus: false,
    refetchOnMount: false, // Don't refetch when component remounts
    enabled: !!postId,
    retry: 1,
  });

  return {
    data,
    isLoading,
    error: error as Error | null,
  };
}
