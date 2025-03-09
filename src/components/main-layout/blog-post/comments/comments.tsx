import CommentsInput from "@/components/main-layout/blog-post/comments/comments-input";

function Comments() {
  return (
    <>
      <h2 className="text-2xl font-bold text-[rgb(16,24,40)]">Comments</h2>

      <CommentsInput />

      <CommentsList />
    </>
  );
}

export default Comments;

const CommentsList = () => {
  return <div>meow</div>;
};
