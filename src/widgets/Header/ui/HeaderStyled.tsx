import { useTheme } from "@/app/providers/context/useTheme";
import { routesConfig } from "@/shared/config/routesConfig";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { AppLinkStyled } from "@/shared/ui/AppLink/AppLinkStyled";
import { Logo } from "@/shared/ui/Logo/Logo";
import { ButtonHTMLAttributes, useState } from "react";
import styled, { css } from 'styled-components';


export const HeaderStyled = () => {
  const { toggleTheme } = useTheme();
  const [open, setOpen] = useState<boolean>(false);
  return (
    <StyledHeader>
      <Logo />
      <StyledMenu>
        <StyledNav>
          {Object.values(routesConfig).map(route => <AppLinkStyled key={route.path} to={route.path || "/"}>{route.name}</AppLinkStyled>)}
          {Object.values(routesConfig).map(route => <AppLink key={route.path} to={route.path || "/"}>{route.name}</AppLink>)}
        </StyledNav>
        <StyledBurger open={open} onClick={() => {
          setOpen(open === true ? false : true);
          console.log("open", open);

        }} />
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
interface StyledBurgerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  open?: boolean;
}
const StyledBurger = styled.button.attrs<StyledBurgerProps>(({ open }) => ({ open: open }))`
  background: none;
  outline: none;
  border: none;
  padding: 0;
  margin: 0;

  ${(open) => {
    return !open ? css`
      display: block;
      margin: var(--indent-s) var(--indent-m);
      content: "";
      width: 30px;
      height: 2px;
      background: transparent;
      position: relative;

      &:before{
      position: absolute;
      content: "";
      width: 30px;
      height: 2px;
      background: white;
      left: 0;
      right: 0;
      transform: rotate(45deg);
      }
    &:after{
      position: absolute;
      content: "";
      width: 30px;
      height: 2px;
      background: white;
  
      left: 0;
      right: 0;
      transform: rotate(-45deg);
      }
      @media (min-width:767px) {
        display: none;
      }
    ` : css`
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
  }}

`;