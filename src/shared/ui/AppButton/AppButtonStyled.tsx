import { ButtonHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

type AppButtonVariant = "clear";


interface AppButtonStyled extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: AppButtonVariant;
}

export const AppButtonStyled = ({ children }: AppButtonStyled) => {
  return (<StyledAppButton>
    {children}
  </StyledAppButton>);
};

const StyledAppButton = styled.button`
   background: none;
  outline: none;
  border: none;
  padding: 0;
  margin: 0;
`;