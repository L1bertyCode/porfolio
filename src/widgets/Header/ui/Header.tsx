import { Logo } from "@/shared/ui/Logo/Logo";
import s from "./Header.module.css";
import { useTheme } from "@/app/providers/context/useTheme";
import { routesConfig } from "@/shared/config/routesConfig";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { AppButton } from "@/shared/ui/AppButton/AppButton";
import { useTranslation } from "react-i18next";
import { Socials } from "@/features/Socials";
interface HeaderProps { };
export const Header = ({ }: HeaderProps) => {
  const { toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();
  console.log("i18n.language", i18n);

  return (
    <header className={s.header}>
      <Logo />
      <div>
        <nav>
          {Object.values(routesConfig).map(route => <AppLink key={route.path} to={route.path || "/"}>{route.name}</AppLink>)}
          {Object.values(routesConfig).map(route => <AppLink key={route.path} to={route.path || "/"}>{route.name}</AppLink>)}
        </nav>
        <Socials />
        <AppButton onClick={toggleTheme}
          colorType="accented">
          {t("Theme")}
        </AppButton>
        <AppButton onClick={() => {
          i18n.changeLanguage(i18n.resolvedLanguage === "en" ? "Ru" : "en");
        }}
          colorType="accented">
          {t("Lang")}
        </AppButton>
      </div>
    </header>
  );
};