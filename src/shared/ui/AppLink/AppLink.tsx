import { Link, LinkProps } from "react-router-dom";
import s from "./AppLink.module.css";
import { ReactNode } from "react";
import cn from "classnames";

interface AppLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
};

export const AppLink = ({ to, children, className }: AppLinkProps) => {
  return (
    <Link to={to} className={cn(s.appLink, className)}>
      {children}
    </Link>
  );
};