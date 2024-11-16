import { Logo } from "@/shared/ui/Logo/Logo";
import s from "./Footer.module.css";
interface FooterProps { };
export const Footer = ({ }: FooterProps) => {
  return (
    <footer className={s.footer}>
      <div className={s.topFooter}>
        <Logo />
        <div>
          <div className={s.phone}>Phone</div>
          <div className={s.email}>Email</div>
          <div className={s.socials}>Socials</div>
          <hr />
        </div>
      </div>
      <div className={s.bottomFooter}>
        <div className={s.nav}>Nav</div>
        <div className={s.name}>Name</div>
      </div>
    </footer>
  );
};