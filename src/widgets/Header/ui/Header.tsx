import { Logo } from "@/shared/ui/Logo/Logo";
import s from "./Header.module.css";
import { useTheme } from "@/app/providers/context/useTheme";
import { routesConfig } from "@/shared/config/routesConfig";
import { Link } from "react-router-dom";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
interface HeaderProps { };
export const Header = ({ }: HeaderProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className={s.header}>
      <Logo />

      <div>
        <nav>
          {Object.values(routesConfig).map(route => <AppLink key={route.path} to={route.path || "/"}>{route.name}</AppLink>)}
          {Object.values(routesConfig).map(route => <AppLink key={route.path} to={route.path || "/"}>{route.name}</AppLink>)}
        </nav>
        <button onClick={toggleTheme}>
          Theme
        </button>
      </div>
    </header>
  );
};