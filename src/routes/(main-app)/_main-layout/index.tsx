import { createFileRoute } from "@tanstack/react-router";
import Post from "../../../components/main-layout/homepage/Post";
import MainWrapper from "../../../components/main-layout/main-wrapper";
import { useFetchPosts } from "../../../hooks/useFetchPosts";
import { Spinner } from "@/components/spinners";

export const Route = createFileRoute("/(main-app)/_main-layout/")({
  component: Index,
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
