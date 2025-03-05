import { Link } from "@tanstack/react-router";

function NotFoundPost({ error }: { error: Error }) {
  return (
    <div className="flex grow flex-col items-center justify-center gap-6 p-8">
      <div className="text-red-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>
      <h2 className="text-center text-3xl font-bold text-gray-800">
        {error.message}
      </h2>
      <Link
        to="/"
        className="rounded-lg bg-red-500 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-red-600"
      >
        Return to Homepage
      </Link>
    </div>
  );
}

export default NotFoundPost;
