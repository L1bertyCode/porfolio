import { Logo } from "@/shared/ui/Logo/Logo";
import s from "./Header.module.css";
import { useTheme } from "@/app/providers/context/useTheme";
import { AppButton } from "@/shared/ui/AppButton/AppButton";
import { useTranslation } from "react-i18next";
import { Socials } from "@/features/Socials";
import { NavList } from "@/features/NavList";
interface HeaderProps { };
export const Header = ({ }: HeaderProps) => {
  const { toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();
  console.log("i18n.language", i18n);

  return (
    <header className={s.header}>
      <Logo />
      <div>
        <NavList />
        {/* <span className={s.burger}></span> */}
        <Socials />
        <AppButton onClick={toggleTheme}
          colorType="accented">
          {t("Theme")}
        </AppButton>
        <AppButton onClick={() => {
          i18n.changeLanguage(i18n.resolvedLanguage === "en" ? "ru" : "en");
        }}
          colorType="accented">
          {t("Lang")}
        </AppButton>
      </div>
    </header>
  );
};