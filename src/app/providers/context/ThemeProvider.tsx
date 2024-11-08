import { ReactNode, useMemo, useState } from "react";
import { Theme, ThemeContext } from "./ThemeContext";

interface ThemeProviderProps {
  children?: ReactNode;
}
export const LOCAL_STORAGE_THEME_KEY = "theme";
const defaulTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY)) as Theme || "dark";
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(defaulTheme);
  const defaultValue = useMemo(() => (
    {
      theme,
      setTheme
    }
  ), [theme]);
  return (
    <ThemeContext.Provider value={defaultValue}>
      {children}
    </ThemeContext.Provider>
  );
};