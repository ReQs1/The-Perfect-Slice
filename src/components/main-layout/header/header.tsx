import { Link } from "@tanstack/react-router";
import { LoginButton, UserAvatar } from "./auth-buttons";
import { type UserType } from "../../../hooks/useAuth";

function Header({
  userData,
  isLoading,
}: {
  userData: UserType | undefined;
  isLoading: boolean;
}) {
  return (
    <header className="sticky top-0 border-b-1 border-b-gray-200 bg-white px-10 py-4">
      <nav className="mx-auto flex max-w-[1800px] flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <Link to="/" className="text-2xl font-bold">
          The Perfect Pizza
        </Link>
        <ul className="flex items-center gap-4 sm:gap-6">
          <li>
            <Link
              to="/about"
              activeProps={{
                style: {
                  color: "oklch(0.637 0.237 25.331)",
                },
              }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/calculator"
              activeProps={{
                style: {
                  color: "oklch(0.637 0.237 25.331)",
                },
              }}
            >
              Calculator
            </Link>
          </li>
          {isLoading || !userData ? (
            <LoginButton />
          ) : (
            <UserAvatar user={userData} />
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
