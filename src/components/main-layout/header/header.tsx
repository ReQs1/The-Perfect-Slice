import { Link } from "@tanstack/react-router";
import { LoginButton, UserAvatar } from "./auth-buttons";
import { SmallSpinner } from "../../spinners";
import { UserType } from "../../../hooks/useAuth";

function Header({
  userData,
  isLoading,
}: {
  userData: UserType | undefined;
  isLoading: boolean;
}) {
  return (
    <header className="py-4 border-b-1 border-b-gray-200 px-10">
      <nav className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between max-w-[1800px] mx-auto">
        <Link to="/" className="font-bold text-2xl">
          The Perfect Pizza
        </Link>
        <ul className="flex gap-4 items-center sm:gap-6">
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
          {isLoading ? (
            <SmallSpinner />
          ) : userData ? (
            <UserAvatar user={userData} />
          ) : (
            <LoginButton />
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
