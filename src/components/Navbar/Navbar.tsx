import { useContext } from "react";
import { SignBtn } from "../SignBtn/SignBtn";
import { SwitchThemeBtn } from "../SwitchThemeBtn/SwitchThemeBtn";
import styles from "./navbar.module.css";
import { ThemeContext } from "@/context/ThemeContext";

export const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <nav
      className={`${styles.navbar as string} theme theme-${theme as string}`}
    >
      <SwitchThemeBtn />
      <SignBtn />
    </nav>
  );
};
