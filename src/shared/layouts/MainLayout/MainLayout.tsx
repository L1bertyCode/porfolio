import { ReactNode } from "react";
import s from "./MainLayout.module.css";
interface MainLayoutProps {
  header: ReactNode;
  main: ReactNode;
  footer?: ReactNode;
};
export const MainLayout = ({ header, main, footer }: MainLayoutProps) => {
  return (
    <div className={s.mainLayout}>
      <>{header}</>
      <main>{main}</main>
      {footer && <footer>{footer}</footer>}
    </div>
  );
};