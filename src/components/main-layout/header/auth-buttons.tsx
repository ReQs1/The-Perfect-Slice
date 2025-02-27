import { Link } from "@tanstack/react-router";
import { User } from "lucide-react";
import { useRef, useState } from "react";
import { useClickOutside } from "../../../hooks/useClickOutside";
import { useLogoutMutation } from "../../../hooks/useLogoutMutation";
import { UserType } from "../../../hooks/useAuth";

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
        className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 cursor-pointer"
        aria-label="Toggle authentication modal"
      >
        <User className="w-5 h-5 text-gray-600" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
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
        className="overflow-hidden w-8 h-8 rounded-full cursor-pointer"
        aria-label="Toggle authentication modal"
      >
        <img
          src={user.picture}
          referrerPolicy="no-referrer"
          alt="User's google icon"
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-2 translate-y-1/2 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
          {/* TODO: add dashboard for admins */}
          {/* {user.is_admin && (
            <Link
              to="/dashboard"
              className="block text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Dashboard
            </Link>
          )} */}
          <button
            onClick={() => mutate()}
            className="w-full text-left cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Log out
          </button>
        </div>
      )}
    </div>
  );
}
