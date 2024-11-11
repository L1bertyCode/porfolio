import { Link, LinkProps } from "react-router-dom";
import s from "./AppLink.module.css";
import { ReactNode } from "react";

interface AppLinkProps extends LinkProps { children: ReactNode; };

export const AppLink = ({ to, children }: AppLinkProps) => {
  return (
    <Link to={to} className={s.appLink}>
      {children}
    </Link>
  );
};