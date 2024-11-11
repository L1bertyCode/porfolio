import { Link, LinkProps } from "react-router-dom";
import s from "./AppLink.module.css";
import { ReactNode } from "react";
import cn from "classnames";
import styled from "styled-components";

interface AppLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
};

export const AppLinkStyled = ({ to, children, className }: AppLinkProps) => {
  return (
    <StyledLink to={to} className={cn(s.appLink, className)}>
      {children}
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
   padding: var(--indent-s) var(--indent-m);
`;