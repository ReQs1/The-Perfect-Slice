import { useAuth } from "@/hooks/useAuth";
import { useLocation } from "@tanstack/react-router";
import { LogIn } from "lucide-react";
import CommentForm from "@/components/main-layout/blog-post/comments/comments-new-comment-form";

function CommentsInput({ postId }: { postId: string }) {
  const { data: userData } = useAuth();
  const currentPath = useLocation().pathname;

  return userData ? (
    <div className="flex items-center gap-4">
      <img
        className="h-8 w-8 rounded-full"
        src={userData.picture}
        alt="User's avatar"
      />
      <CommentForm postId={postId} />
    </div>
  ) : (
    <div className="flex items-center justify-between rounded-xl bg-gray-100 px-6 py-4">
      <p className="text-gray-700">You need to be logged in to comment.</p>
      <a
        href={`${import.meta.env.VITE_SERVER_URL}/auth/google?redirect=${currentPath}`}
        className="inline-flex items-center rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600"
      >
        <LogIn className="mr-2 h-4 w-4" />
        Log In
      </a>
    </div>
  );
}

export default CommentsInput;
