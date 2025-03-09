import { Comment } from "@/hooks/usePostComments";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEditComment } from "@/hooks/useEditComment";

const schema = z.object({
  commentBody: z.string().min(1).max(10),
});

export type EditFormFields = z.infer<typeof schema>;

type Props = {
  comment: Comment;
  onClick: React.Dispatch<React.SetStateAction<number | null>>;
  postId: string;
};

function EditCommentForm({ comment, onClick, postId }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EditFormFields>({
    defaultValues: {
      commentBody: comment.body,
    },
    resolver: zodResolver(schema),
  });

  const { mutate: editComment } = useEditComment(comment.id, postId, () =>
    onClick(null),
  );

  function onSubmit(data: EditFormFields) {
    editComment(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-2">
        <input
          {...register("commentBody")}
          className="mt-2 w-full rounded-md border border-gray-300 p-2"
        />
        {errors.commentBody && (
          <p className="text-red-500">{errors.commentBody.message}</p>
        )}
      </div>
      <div className="mt-2 space-x-2">
        <button
          type="submit"
          className="text-blue-500 hover:text-blue-700"
          disabled={isSubmitting}
        >
          Save
        </button>
        <button
          type="button"
          onClick={() => onClick(null)}
          className="text-gray-500 hover:text-gray-700"
          disabled={isSubmitting}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default EditCommentForm;
