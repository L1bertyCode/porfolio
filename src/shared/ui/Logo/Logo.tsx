
import s from "./Logo.module.css";
import { AppLink } from "../AppLink/AppLink";
import { Text } from "../Text/Text";
interface LogoProps { className?:string };
export const Logo = ({className }: LogoProps) => {
  return (
    <AppLink
      to='/'
      className={`${s.logo, className}`}>
      <Text
        text={"V914"}
        header="h3" colorType="accent"
      />
    </AppLink>
  );
};