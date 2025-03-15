import { createFileRoute } from "@tanstack/react-router";
import Post from "../../../components/main-layout/homepage/Post";
import MainWrapper from "../../../components/main-layout/main-wrapper";
import { useFetchPosts } from "../../../hooks/useFetchPosts";
import { Spinner } from "@/components/spinners";

export const Route = createFileRoute("/(main-app)/_main-layout/")({
  component: Index,
  head: () => ({
    meta: [
      {
        name: "description",
        content:
          "Discover delicious pizza recipes, dough-making techniques, and topping ideas from passionate home pizza makers. Join us on our pizza-making journey!",
      },
      { title: "Slice of Life | Pizza Recipes, Tips & Techniques" },
      {
        property: "og:title",
        content: "Slice of Life | Pizza Recipes, Tips & Techniques",
      },
      {
        property: "og:description",
        content:
          "Discover delicious pizza recipes, dough-making techniques, and topping ideas from passionate home pizza makers.",
      },
      { property: "og:image", content: "/og/og_main.png" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://perfectslice.netlify.app/" },

      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Slice of Life | Pizza Recipes, Tips & Techniques",
      },
      {
        name: "twitter:description",
        content:
          "Discover delicious pizza recipes, dough-making techniques, and topping ideas from passionate home pizza makers.",
      },
      { name: "twitter:image", content: "/og/og_main.png" },
    ],
  }),
});

function Index() {
  const { data: posts = [], isLoading } = useFetchPosts();

  return (
    <MainWrapper maxWidth="max-w-4xl">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
        {isLoading && (
          <div className="flex justify-center">
            <Spinner />
          </div>
        )}

        {posts.length === 0 && !isLoading && (
          <div className="text-center text-gray-500">No posts found</div>
        )}

        {posts.length > 0 &&
          posts.map((post) => <Post key={post._id} post={post} />)}
      </div>
    </MainWrapper>
  );
}
