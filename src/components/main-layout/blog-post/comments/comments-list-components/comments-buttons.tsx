import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/dialog";
import { useAuth } from "@/hooks/useAuth";
import { Comment } from "@/hooks/usePostComments";
import { fetchWithCredentials } from "@/utils/fetch-with-credentials";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Edit2 } from "lucide-react";
import toast from "react-hot-toast";

function CommentButtons({
  comment,
  onClick,
}: {
  comment: Comment;
  onClick: React.Dispatch<React.SetStateAction<number | null>>;
}) {
  const { data: user } = useAuth();

  return (
    <div className="flex gap-2">
      {user?.id === comment.author_id && (
        <button
          onClick={() => onClick(comment.id)}
          className="cursor-pointer text-blue-500 hover:text-blue-700"
        >
          <Edit2 className="h-4 w-4" />
        </button>
      )}
      <DeleteDialog commentId={comment.id} />
    </div>
  );
}

export default CommentButtons;

function DeleteDialog({ commentId }: { commentId: number }) {
  const queryClient = useQueryClient();
  const { mutate: deleteComment } = useMutation({
    mutationFn: () => {
      return fetchWithCredentials(`/api/comments/${commentId}`, {
        method: "DELETE",
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments"] });
      toast.success("Comment deleted successfully", {
        position: "bottom-center",
      });
    },
    onError: () => {
      toast.error("Couldn't delete comment", {
        position: "bottom-center",
      });
    },
  });
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="cursor-pointer text-red-500 hover:text-red-700">
          Delete
        </button>
      </DialogTrigger>
      <DialogContent className="bg-white p-4 text-black">
        <DialogHeader>
          <DialogTitle className="text-xl">
            Are you absolutely sure?
          </DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
          <button
            onClick={() => deleteComment()}
            className="cursor-pointer rounded-lg bg-red-500 px-2 py-1 text-white hover:bg-red-600"
          >
            Delete
          </button>
          <DialogClose asChild>
            <button className="cursor-pointer">Close</button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
