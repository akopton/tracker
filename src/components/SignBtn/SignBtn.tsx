import { signIn, signOut, useSession } from "next-auth/react";

export const SignBtn = () => {
  const { status } = useSession();

  const handleClick = () => {
    status === "authenticated"
      ? () => void signOut()
      : () => void signIn("google");
  };

  return (
    <button onClick={handleClick}>
      {status === "authenticated" ? "Sign Out" : "Sign In"}
    </button>
  );
};
