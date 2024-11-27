import { routesConfig } from "@/shared/config/routesConfig";
import s from "./NavList.module.css";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
interface NavListProps { className?: string; };
export const NavList = ({ className }: NavListProps) => {
  return (
    <nav className={className}>
      {Object.values(routesConfig).map(route => <AppLink key={route.path} to={route.path || "/"}>{route.name}</AppLink>)}
    </nav>
  );
};