import { useQuery } from "@tanstack/react-query";
import { client } from "../sanity/client";

const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    publishedAt,
    "imageUrl": image.asset->url,
    slug
  }`;

export type Post = {
  _id: string;
  title: string;
  publishedAt: string;
  imageUrl: string;
  slug: {
    current: string;
    _type: string;
  };
};

export function useFetchPosts() {
  return useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: async () => {
      return await client.fetch<Post[]>(POSTS_QUERY);
    },
    staleTime: 5 * 60 * 1000,
    retry: 1,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
  });
}
