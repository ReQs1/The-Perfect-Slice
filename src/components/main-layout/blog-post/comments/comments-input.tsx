import { useAuth } from "@/hooks/useAuth";
import { useLocation } from "@tanstack/react-router";
import { LogIn, Send } from "lucide-react";

function CommentsInput() {
  const { data: userData } = useAuth();
  const currentPath = useLocation().pathname;

  return userData ? (
    <div className="flex items-center gap-4">
      <img
        className="h-8 w-8 rounded-full"
        src={userData.picture}
        alt="User's avatar"
      />
      <form className="flex w-full items-center justify-between rounded-2xl border border-gray-300 px-4 py-2 outline-red-500 focus-within:outline-2">
        <input
          className="grow focus:outline-0"
          type="text"
          placeholder="Add a comment..."
        />
        <button className="cursor-pointer">
          <Send className="text-red-500 hover:text-red-600" />
        </button>
      </form>
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
