import { createFileRoute } from "@tanstack/react-router";
import MainWrapper from "../../../components/main-layout/main-wrapper";
import { useQuery } from "@tanstack/react-query";
import { client } from "../../../sanity/client";

export const Route = createFileRoute("/(main-app)/_main-layout/")({
  component: Index,
});

const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  publishedAt,
  "imageUrl": image.asset->url
}`;

type Post = {
  _id: string;
  title: string;
  publishedAt: Date;
  imageUrl: string;
};

function Index() {
  const { data: posts = [] } = useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: async () => {
      return await client.fetch<Post[]>(POSTS_QUERY);
    },
    staleTime: 5 * 60 * 1000,
    retry: 1,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
  });

  // TODO: remove console log
  console.log(posts);

  return (
    <MainWrapper maxWidth="max-w-4xl">
      {posts && posts.length > 0 ? (
        posts?.map((post) => (
          <div key={post._id}>
            <img src={post.imageUrl} alt="meow" />
          </div>
        ))
      ) : (
        <p>No posts founds</p>
      )}
    </MainWrapper>
  );
}
