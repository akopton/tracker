import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./btn.module.css";

export const SignBtn = () => {
  const { status } = useSession();

  const handleClick = () => {
    return status === "authenticated" ? signOut() : signIn("google");
  };

  return (
    <button onClick={handleClick} className={styles.btn}>
      {status === "authenticated" ? "Sign Out" : "Sign In"}
    </button>
  );
};
