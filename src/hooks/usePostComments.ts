import { useQuery } from "@tanstack/react-query";

export type Comment = {
  id: number;
  body: string;
  created_at: Date;
  author_name: string;
  author_picture: string;
  author_id: number;
};

const getPostComments = async (postId: string) => {
  const res = await fetch(
    `${import.meta.env.VITE_SERVER_URL}/api/posts/${postId}/comments`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch comments");
  }
  const data = await res.json();
  return data;
};

export function usePostComments(postId: string) {
  return useQuery<Comment[]>({
    queryKey: ["comments", postId],
    queryFn: () => getPostComments(postId),
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 1000 * 60 * 5,
  });
}
