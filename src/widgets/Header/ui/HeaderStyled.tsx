import { useTheme } from "@/app/providers/context/useTheme";
import { routesConfig } from "@/shared/config/routesConfig";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { AppLinkStyled } from "@/shared/ui/AppLink/AppLinkStyled";
import { Logo } from "@/shared/ui/Logo/Logo";
import styled from 'styled-components';


export const HeaderStyled = () => {
  const { toggleTheme } = useTheme();
  return (
    <StyledHeader>
      <Logo />

      <StyledMenu>
        <nav>
          {Object.values(routesConfig).map(route => <AppLinkStyled key={route.path} to={route.path || "/"}>{route.name}</AppLinkStyled>)}
          {Object.values(routesConfig).map(route => <AppLink key={route.path} to={route.path || "/"}>{route.name}</AppLink>)}
        </nav>
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
  justify-content: space-between;
`;