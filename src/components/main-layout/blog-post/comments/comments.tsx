import CommentsInput from "@/components/main-layout/blog-post/comments/comments-input";
import CommentsList from "@/components/main-layout/blog-post/comments/comments-list";

function Comments({ postId }: { postId: string }) {
  return (
    <>
      <h2 className="text-2xl font-bold text-[rgb(16,24,40)]">Comments</h2>

      <CommentsInput postId={postId} />

      <CommentsList postId={postId} />
    </>
  );
}

export default Comments;
