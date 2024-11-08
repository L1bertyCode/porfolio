import { createContext } from "react";

export type Theme = "light" | "dark";

interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});