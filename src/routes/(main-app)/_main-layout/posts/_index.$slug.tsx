import { PortableText } from "@portabletext/react";
import { createFileRoute, useParams } from "@tanstack/react-router";

import { usePostInfo } from "@/hooks/usePostInfo";
import { Spinner } from "@/components/spinners";
import NotFoundPost from "@/components/main-layout/blog-post/not-found";
import MainWrapper from "@/components/main-layout/main-wrapper";
import PostHeader from "@/components/main-layout/blog-post/post-header";
import ImagesGallery from "@/components/main-layout/blog-post/images-gallery";
import Comments from "@/components/main-layout/blog-post/comments/comments";

export const Route = createFileRoute(
  "/(main-app)/_main-layout/posts/_index/$slug",
)({
  component: RouteComponent,
});

function RouteComponent() {
  const slug = useParams({
    from: "/(main-app)/_main-layout/posts/_index/$slug",
    select: (params) => params.slug,
  });

  const { data: post, error, isLoading } = usePostInfo(slug);

  if (error) {
    return <NotFoundPost error={error} />;
  }

  if (isLoading)
    return (
      <div className="flex grow items-center justify-center">
        <Spinner />
      </div>
    );

  if (post) {
    return (
      <MainWrapper maxWidth="max-w-4xl">
        <article className="grid gap-8">
          <PostHeader post={post} />

          <div className="prose">
            {Array.isArray(post.body) && <PortableText value={post.body} />}
          </div>

          <ImagesGallery post={post} />

          {/* comments */}
          <Comments />
        </article>
      </MainWrapper>
    );
  }
}
