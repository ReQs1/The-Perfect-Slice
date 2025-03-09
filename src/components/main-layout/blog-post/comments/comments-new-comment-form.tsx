import { useAddComment } from "@/hooks/useAddComment";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  commentBody: z.string().min(1).max(1000),
});

export type FormFields = z.infer<typeof schema>;

export default function CommentForm({ postId }: { postId: string }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      commentBody: "",
    },
    resolver: zodResolver(schema),
  });

  const { mutate: addComment } = useAddComment(postId);

  function onSubmit(data: FormFields) {
    addComment(data);
  }

  return (
    <div className="grid w-full gap-2">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center justify-between rounded-2xl border border-gray-300 px-4 py-2 outline-red-500 focus-within:outline-2"
      >
        <input
          {...register("commentBody")}
          className="grow focus:outline-0"
          type="text"
          placeholder="Add a comment..."
          disabled={isSubmitting}
        />
        <button className="cursor-pointer" disabled={isSubmitting}>
          <Send className="text-red-500 hover:text-red-600" />
        </button>
      </form>

      {errors.commentBody && (
        <p className="text-red-500">{errors.commentBody.message}</p>
      )}
    </div>
  );
}
