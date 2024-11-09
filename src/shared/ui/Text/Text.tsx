import cn from "classnames";
import s from "./Text.module.css";
type TextColorType =
  "primary" |
  "secondary" |
  "accent";
interface TextProps {
  text: string;
  colorType?: TextColorType;
};

export const Text = ({ text, colorType = "secondary" }: TextProps) => {
  return (
    <span className={cn(s.text, s[colorType])}>
      {text}
    </span>
  );
};