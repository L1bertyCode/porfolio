import styled from "styled-components";
import { AppLink } from "../AppLink/AppLink";

export const LogoStyled = () => {
  return (
    <StyledLogo to='/'>
      Logo
    </StyledLogo>
  );
};

const StyledLogo = styled(AppLink)`
  
`;