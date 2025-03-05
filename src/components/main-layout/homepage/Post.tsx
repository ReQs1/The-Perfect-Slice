import { Link } from "@tanstack/react-router";
import { Calendar, Heart, MessageSquareText } from "lucide-react";
import { type Post } from "../../../hooks/useFetchPosts";
import { formatDate } from "../../../lib/formatDate";

const Post = ({ post }: { post: Post }) => {
  const formattedPublishDate = formatDate(post.publishedAt);

  return (
    <Link
      to="/posts/$slug"
      params={{ slug: post.slug.current }}
      aria-label={`Read more about ${post.title}`}
      className="block transform transition-transform duration-200 hover:scale-[1.02]"
    >
      <article className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-md transition-shadow duration-200 hover:shadow-xl">
        <div className="aspect-video w-full overflow-hidden">
          <img
            className="h-full w-full object-cover transition-transform duration-200 hover:scale-105"
            src={post.imageUrl}
            alt={post.title}
            loading="lazy"
          />
        </div>

        <div className="flex grow flex-col gap-2 p-3">
          <h2 className="text-xl font-bold text-gray-900 transition-colors group-hover:text-red-500">
            {post.title}
          </h2>

          <p className="mb-4 flex items-center gap-2 text-sm text-gray-600">
            <Calendar size={16} className="text-gray-400" />
            {formattedPublishDate}
          </p>

          <div className="mt-auto flex gap-4 text-sm text-gray-600">
            <p className="flex items-center gap-1">
              <Heart size={16} className="text-red-500" />
              <span>24</span>
            </p>
            <p className="flex items-center gap-1">
              <MessageSquareText size={16} className="text-blue-500" />
              <span>24</span>
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default Post;
