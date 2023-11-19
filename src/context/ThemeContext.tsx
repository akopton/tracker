import { Context, createContext, useEffect, useState } from "react";

type TTheme = "dark" | "light";

type TThemeContext = {
  theme: TTheme;
  switchTheme: () => void;
};

export const ThemeContext: Context<TThemeContext> = createContext({
  theme: "light",
  switchTheme: () => {},
} as TThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<TTheme>("light");

  const switchTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (!currentTheme) {
      setTheme("light");
      localStorage.setItem("theme", "light");
    } else setTheme(currentTheme as TTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
