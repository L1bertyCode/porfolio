import cn from "classnames";
import s from "./Text.module.css";
type TextColorType =
  "primary" |
  "secondary" |
  "accent";
type TextHeaders = "h1" | "h2" | "h3" | "h4";
interface TextProps {
  text: string;
  colorType?: TextColorType;
  header?: TextHeaders;
  className?: string;
};

export const Text = ({
  text,
  colorType = "secondary",
  header,
  className,
  ...otherProps
}: TextProps) => {
  return (
    <span className={cn(
      s.text,
      s[colorType],
      [header && s[header]],
      className && className
    )}
      {...otherProps}
    >
      {text}
    </span>
  );
};