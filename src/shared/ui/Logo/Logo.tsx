
import s from "./Logo.module.css";
import { AppLink } from "../AppLink/AppLink";
import { Text } from "../Text/Text";
interface LogoProps { };
export const Logo = ({ }: LogoProps) => {
  return (
    <AppLink
      to='/'
      className={s.logo}>
      <Text
        text={"V914"}
        header="h3" colorType="accent"
      />
    </AppLink>
  );
};