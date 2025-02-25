import { Link } from "@tanstack/react-router";
import { UserType } from "../../../types/User";
import { LoginButton, UserAvatar } from "./auth-buttons";
import { SmallSpinner } from "../../spinners";

function Header({
  userData,
  isLoading,
}: {
  userData: UserType | undefined;
  isLoading: boolean;
}) {
  return (
    <header className="flex flex-col items-center gap-3 py-4 border-b-1 border-b-gray-200">
      <h1 className="font-bold text-2xl">The Perfect Pizza</h1>
      <nav className="flex gap-4 items-center">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/calculator">Calculator</Link>
        {isLoading ? (
          <SmallSpinner />
        ) : userData ? (
          <UserAvatar user={userData} />
        ) : (
          <LoginButton />
        )}
      </nav>
    </header>
  );
}

export default Header;
