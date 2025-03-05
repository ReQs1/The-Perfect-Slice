import { Link } from "@tanstack/react-router";
import { User } from "lucide-react";
import { useRef, useState } from "react";
import { useClickOutside } from "../../../hooks/useClickOutside";
import { useLogoutMutation } from "../../../hooks/useLogoutMutation";
import { type UserType } from "../../../hooks/useAuth";

export function LoginButton() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside({
    ref,
    handler: () => setIsOpen(false),
  });

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-200"
        aria-label="Toggle authentication modal"
      >
        <User className="h-5 w-5 text-gray-600" />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-48 rounded-md bg-white py-1 shadow-lg">
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Log In
          </Link>
        </div>
      )}
    </div>
  );
}

export function UserAvatar({ user }: { user: UserType }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { mutate } = useLogoutMutation();

  useClickOutside({
    ref,
    handler: () => setIsOpen(false),
  });

  return (
    <div className="relative flex items-center" ref={ref}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="h-8 w-8 cursor-pointer overflow-hidden rounded-full"
        aria-label="Toggle authentication modal"
      >
        <img
          src={user.picture}
          referrerPolicy="no-referrer"
          alt="User's avatar"
        />
      </button>

      {isOpen && (
        <div className="absolute top-2 right-0 z-10 mt-2 w-48 translate-y-1/2 rounded-md bg-white py-1 shadow-lg">
          <button
            onClick={() => mutate()}
            className="w-full cursor-pointer px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
          >
            Log out
          </button>
        </div>
      )}
    </div>
  );
}
