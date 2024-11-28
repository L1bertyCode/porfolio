import { ButtonHTMLAttributes, ReactNode } from "react";
import s from "./AppButton.module.css";
import cn from "classnames";
type AppButtonVariant = "clear" | "filled" | "outlined";
type AppButtonColorType = "primary" | "secondary" | "accented";
interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: AppButtonVariant;
  colorType?: AppButtonColorType;
  className?: string;
}
export const AppButton = ({ children,
  onClick,
  variant = "clear",
  colorType = "secondary",
  className
}: AppButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(s.appButton, s[variant], s[colorType], className)}>
      {children}
    </button>
  );
};