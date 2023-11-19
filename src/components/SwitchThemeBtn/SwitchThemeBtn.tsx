import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
import styles from "./btn.module.css";
import { BsMoonStars } from "react-icons/bs";
import { BsSun } from "react-icons/bs";

export const SwitchThemeBtn = () => {
  const { theme, switchTheme } = useContext(ThemeContext);

  return (
    <button className={styles.switch} onClick={switchTheme}>
      <div
        className={styles.circle}
        style={{
          left: theme === "light" ? "2px" : "calc(100% - 32px)",
          background: theme === "light" ? "gray" : "white",
          color: theme === "light" ? "white" : "gray",
        }}
      >
        {theme === "dark" ? <BsMoonStars /> : <BsSun />}
      </div>
      <div className={styles.hiddenCircle}></div>
      <div className={styles.hiddenCircle}></div>
    </button>
  );
};
