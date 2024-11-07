import { createContext } from "react";
import { Theme } from "./ui/ThemeProvider";

interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}
export const ThemeContext = createContext<ThemeContextProps>({});