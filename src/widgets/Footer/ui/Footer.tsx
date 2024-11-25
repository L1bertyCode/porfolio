import { Logo } from "@/shared/ui/Logo/Logo";
import s from "./Footer.module.css";
import { NavList } from "@/features/NavList";
import { Socials } from "@/features/Socials";
interface FooterProps { };
export const Footer = ({ }: FooterProps) => {
  return (
    <footer className={s.footer}>
      <div className={s.topFooter}>
        <Logo />
        <div className={s.info}>
          <div className={s.phone}>Phone</div>
          <div className={s.email}>Email</div>
          <Socials />
        </div>
      </div>
      <hr />
      <div className={s.bottomFooter}>
        <NavList />
        <div className={s.title}>Designed and built by <span className={s.name}>Viacheslav</span></div>
      </div>
    </footer>
  );
};