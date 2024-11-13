import { Logo } from "@/shared/ui/Logo/Logo";
import s from "./Header.module.css";
import { useTheme } from "@/app/providers/context/useTheme";
import { routesConfig } from "@/shared/config/routesConfig";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { AppButton } from "@/shared/ui/AppButton/AppButton";
interface HeaderProps { };
export const Header = ({ }: HeaderProps) => {
  const { toggleTheme } = useTheme();
  return (
    <header className={s.header}>
      <Logo />
      <div>
        <nav>
          {Object.values(routesConfig).map(route => <AppLink key={route.path} to={route.path || "/"}>{route.name}</AppLink>)}
          {Object.values(routesConfig).map(route => <AppLink key={route.path} to={route.path || "/"}>{route.name}</AppLink>)}
        </nav>
        <AppButton onClick={toggleTheme}
          colorType="accented">
          Theme
        </AppButton>
      </div>
    </header>
  );
};