import { useQuery } from "@tanstack/react-query";
import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { client } from "../../../../sanity/client";
import { urlFor } from "../../../../sanity/imageBuilder";
import { Spinner } from "../../../../components/spinners";
import { Post } from "../../../../hooks/useFetchPosts";
import { PortableTextBlock } from "@portabletext/types";

export const Route = createFileRoute(
  "/(main-app)/_main-layout/posts/_index/$slug",
)({
  component: RouteComponent,
});

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

type DetailedPost = Post & {
  body: PortableTextBlock[];
  gallery: {
    asset: {
      _ref: string;
      _type: string;
    };
    type: string;
    _key: string;
  };
  image: {
    _type: string;
    asset: {
      _type: string;
      _ref: string;
    };
  };
};

function RouteComponent() {
  const slug = useParams({
    from: "/(main-app)/_main-layout/posts/_index/$slug",
    select: (params) => params.slug,
  });

  const {
    data: post,
    error,
    isLoading,
  } = useQuery<DetailedPost>({
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
    refetchOnReconnect: true,
  });

  console.log(post);

  if (error) {
    return (
      <div className="flex grow flex-col items-center justify-center gap-4">
        <h2 className="text-3xl font-bold">{error.message}</h2>
        <Link to="/">Go to homepage</Link>
      </div>
    );
  }

  if (isLoading)
    return (
      <div className="flex grow items-center justify-center">
        <Spinner />
      </div>
    );

  if (post) {
    return (
      <div>
        <img
          src={urlFor(post.image).width(700).height(400).url()}
          alt="image header"
        />
      </div>
    );
  }
}
