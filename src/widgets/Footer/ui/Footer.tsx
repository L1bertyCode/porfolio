import { Logo } from "@/shared/ui/Logo/Logo";
import s from "./Footer.module.css";
import { NavList } from "@/features/NavList";
import { Socials } from "@/features/Socials";
interface FooterProps { };
export const Footer = ({ }: FooterProps) => {
  return (
    <footer className={s.footer}>
      <div className={s.topFooter}>
        <Logo className={s.logo} />
        <div className={s.info}>
          <div className={s.tg}>https://t.me/V914eslav</div>
          <div className={s.email}>libertycodeg@gmail.com</div>
          <Socials />
        </div>
      </div>
      <hr />
      <div className={s.bottomFooter}>
        <NavList className={s.nav} />

        <div className={s.title}>Designed and built by <span className={s.name}>Viacheslav</span></div>
      </div>
    </footer>
  );
};