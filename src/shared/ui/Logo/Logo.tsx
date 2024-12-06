
import s from "./Logo.module.css";
import { AppLink } from "../AppLink/AppLink";
import { Text } from "../Text/Text";
interface LogoProps { className?: string; };
export const Logo = ({ className }: LogoProps) => {
  return (
    <AppLink
      to='/'
      className={`${s.logo, className}`}>
      <Text
        text={"FreeCode"}
        header="h3" colorType="accent"
      />
    </AppLink>
  );
};