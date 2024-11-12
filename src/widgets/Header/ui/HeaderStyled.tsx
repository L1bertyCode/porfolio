import { useTheme } from "@/app/providers/context/useTheme";
import { routesConfig } from "@/shared/config/routesConfig";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { AppLinkStyled } from "@/shared/ui/AppLink/AppLinkStyled";
import { Logo } from "@/shared/ui/Logo/Logo";
import { useState } from "react";
import styled from 'styled-components';


export const HeaderStyled = () => {
  const { toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <StyledHeader>
      <Logo />
      <StyledMenu>
        <StyledNav>
          {Object.values(routesConfig).map(route => <AppLinkStyled key={route.path} to={route.path || "/"}>{route.name}</AppLinkStyled>)}
          {Object.values(routesConfig).map(route => <AppLink key={route.path} to={route.path || "/"}>{route.name}</AppLink>)}
        </StyledNav>
        <StyledBurger />
        <button onClick={toggleTheme}>
          Theme
        </button>
      </StyledMenu>
    </StyledHeader>
  );
};
const StyledHeader = styled.header`
  width: 100%;
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledMenu = styled.div`
  display: flex;
  justify-content: space-between;align-items: center;

`;
const StyledNav = styled.nav`
 @media (max-width:767px) {
    display: none;
  }
 
`;
const StyledBurger = styled.button`
  background: none;
  outline: none;
  border: none;
  padding: 0;
  margin: 0;
  
  display: block;
  margin: var(--indent-s) var(--indent-m);
  content: "";
  width: 30px;
  height: 2px;
  background: white;
  position: relative;

  &:before,&:after{
  position: absolute;
  content: "";
  width: 30px;
  height: 2px;
  background: white;
  top: 8px;
  left: 0;
  right: 0;
  }
  &:after{top:-8px}
  @media (min-width:767px) {
    display: none;
  }
`;