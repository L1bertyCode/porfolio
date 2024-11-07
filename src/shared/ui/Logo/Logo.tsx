import { Link } from "react-router-dom";
import s from "./Logo.module.css";
interface LogoProps { };
export const Logo = ({ }: LogoProps) => {
  return (
    <Link to='/' className={s.logo}>
      Logo
    </Link>
  );
};