import { useQuery } from "@tanstack/react-query";
import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { client } from "../../../../sanity/client";
import { urlFor } from "../../../../sanity/imageBuilder";
import { Spinner } from "../../../../components/spinners";

export const Route = createFileRoute(
  "/(main-app)/_main-layout/posts/_index/$slug",
)({
  component: RouteComponent,
});

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

function RouteComponent() {
  const slug = useParams({
    from: "/(main-app)/_main-layout/posts/_index/$slug",
    select: (params) => params.slug,
  });

  const {
    data: post,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["post", slug],
    queryFn: async () => {
      const post = await client.fetch(POST_QUERY, { slug });
      if (!post) {
        throw new Error("Not Found");
      }
      return post;
    },
    staleTime: 5 * 60 * 1000,
    retry: 1,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
  });

  console.log(post);

  if (isLoading)
    return (
      <div className="flex grow items-center justify-center">
        <Spinner />
      </div>
    );

  if (error) {
    return (
      <div className="flex grow flex-col items-center justify-center gap-4">
        <h2 className="text-3xl font-bold">
          Sorry, Couldn't find blog post you are looking for
        </h2>
        <Link to="/">Go to homepage</Link>
      </div>
    );
  }

  return (
    <div>
      <img
        src={urlFor(post.image).width(500).height(300).url()}
        alt="image header"
      />
    </div>
  );
}
