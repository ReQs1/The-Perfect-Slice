import { useQuery } from "@tanstack/react-query";
import { Post } from "./useFetchPosts";
import { PortableTextBlock } from "@portabletext/react";
import { client } from "../sanity/client";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

export type DetailedPost = Post & {
  body: PortableTextBlock[];
  gallery: {
    asset: {
      _ref: string;
      _type: string;
    };
    _type: string;
    _key: string;
  }[];
  image: {
    _type: string;
    asset: {
      _type: string;
      _ref: string;
    };
  };
};

export function usePostInfo(slug: string) {
  return useQuery<DetailedPost>({
    queryKey: ["post", slug],
    queryFn: async () => {
      try {
        const post = await client.fetch(POST_QUERY, { slug });
        if (!post) {
          throw new Error("Sorry, We couldn't find post you're looking for");
        }
        return post;
      } catch (err) {
        if (err instanceof Error) {
          throw err;
        }
        throw new Error("Failed to fetch post data");
      }
    },
    staleTime: 5 * 60 * 1000,
    retry: 1,
    refetchOnWindowFocus: false,
  });
}
