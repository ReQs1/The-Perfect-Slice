import { usePostEngagement } from "@/hooks/usePostEngagement";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { DisLikeButton, LikeButton } from "./like-buttons";
import { DetailedPost } from "@/hooks/usePostInfo";
import { formatDate } from "@/lib/formatDate";
import { urlFor } from "@/sanity/imageBuilder";

function PostHeader({ post }: { post: DetailedPost }) {
  const { data: postEngagement } = usePostEngagement(post._id);

  return (
    <header>
      <Link
        className="mb-8 flex max-w-fit items-center gap-1 text-left text-red-500 transition-colors hover:text-red-600"
        to="/"
      >
        <span>
          <ArrowLeft size={18} />
        </span>
        Back to all posts
      </Link>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <div className="flex justify-between">
          <p className="text-gray-600">{formatDate(post.publishedAt)}</p>
          {postEngagement?.isLikedByUser ? (
            <DisLikeButton
              likesCount={postEngagement.likesCount}
              postId={post._id}
            />
          ) : (
            <LikeButton
              likesCount={postEngagement?.likesCount}
              postId={post._id}
            />
          )}
        </div>
        <img
          src={urlFor(post.image).width(900).height(500).url()}
          loading="lazy"
          alt={post.title}
          className="aspect-video max-h-[450px] w-full rounded-lg object-cover"
        />
      </div>
    </header>
  );
}

export default PostHeader;
