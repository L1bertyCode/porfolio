import { routesConfig } from "@/shared/config/routesConfig";
import s from "./NavList.module.css";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
interface NavListProps { };
export const NavList = ({ }: NavListProps) => {
  return (
    <nav>
      {Object.values(routesConfig).map(route => <AppLink key={route.path} to={route.path || "/"}>{route.name}</AppLink>)}
      {Object.values(routesConfig).map(route => <AppLink key={route.path} to={route.path || "/"}>{route.name}</AppLink>)}
    </nav>
  );
};