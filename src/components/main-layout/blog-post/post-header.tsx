import { Link } from "@tanstack/react-router";
import { ArrowLeft, Heart } from "lucide-react";
import { urlFor } from "../../../sanity/imageBuilder";
import { formatDate } from "../../../lib/formatDate";
import { DetailedPost } from "../../../hooks/usePostInfo";

function PostHeader({ post }: { post: DetailedPost }) {
  return (
    <header>
      <Link
        className="mb-8 flex items-center gap-1 text-left text-red-500 transition-colors hover:text-red-600"
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
          <button className="flex cursor-pointer items-center gap-1 text-gray-600">
            <span>
              <Heart
                strokeWidth={1.5}
                size={20}
                className="hover:text-red-500"
              />
            </span>
            12
          </button>
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
