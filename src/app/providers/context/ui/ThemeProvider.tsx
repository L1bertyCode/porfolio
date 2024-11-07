import { ReactNode, useMemo, useState } from "react";
import { ThemeContext } from "../ThemeContext";


export type Theme = "light" | "dark";

interface ThemeProviderProps { children: ReactNode; };

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>("dark");
  const value = useMemo(() => ({
    theme,
    setTheme
  }), [theme]);
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};