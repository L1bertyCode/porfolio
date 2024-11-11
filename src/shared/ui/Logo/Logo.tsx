
import s from "./Logo.module.css";
import { AppLink } from "../AppLink/AppLink";
interface LogoProps { };
export const Logo = ({ }: LogoProps) => {
  return (
    <AppLink
     to='/' 
     className={s.logo}>
      Logo
    </AppLink>
  );
};