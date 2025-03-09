import { SmallSpinner } from "@/components/spinners";
import { useAuth } from "@/hooks/useAuth";
import { usePostComments } from "@/hooks/usePostComments";
import { useState } from "react";
import CommentButtons from "./comments-list-components/comments-buttons";
import EditCommentForm from "./comments-list-components/edit-comment-form";

const CommentsList = ({ postId }: { postId: string }) => {
  const [editingCommentId, setEditingCommentId] = useState<null | number>(null);
  const { data: comments, isLoading, error } = usePostComments(postId);
  const { data: user } = useAuth();

  if (isLoading)
    return (
      <div className="flex items-center justify-center">
        <SmallSpinner />
      </div>
    );

  if (error) {
    return (
      <div className="text-center">
        <p>Something went wrong while fetching comments.</p>
      </div>
    );
  }

  if (comments && comments.length === 0)
    return (
      <div className="text-center">
        <p>No comments yet. Be the first to comment!</p>
      </div>
    );

  return (
    <ul className="grid gap-6">
      {comments?.map((comment) => (
        <li key={comment.id} className="rounded-lg bg-white p-4 shadow">
          <div className="flex items-start space-x-4">
            <img
              src={comment.author_picture}
              alt={comment.author_name}
              className="h-8 w-8 rounded-full"
            />
            <div className="grid grow gap-2">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold">{comment.author_name}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(comment.created_at).toLocaleString()}
                  </p>
                </div>
                {(user?.id === comment.author_id || user?.is_admin) && (
                  <CommentButtons
                    comment={comment}
                    onClick={setEditingCommentId}
                  />
                )}
              </div>
              {editingCommentId === comment.id ? (
                <EditCommentForm
                  postId={postId}
                  comment={comment}
                  onClick={setEditingCommentId}
                />
              ) : (
                <p>{comment.body}</p>
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CommentsList;
