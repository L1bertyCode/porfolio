
import { MainLayout } from "../shared/layouts/MainLayout/MainLayout";
import s from "./App.module.css";
import { Suspense } from "react";

import { useTheme } from "./providers/context/useTheme";
import { AppRouter } from "./providers/router";

import cn from "classnames";
import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";

interface AppProps { };
export const App = ({ }: AppProps) => {
  const { theme } = useTheme();
  return (
    <div className={cn(s.app, `app_${theme}_theme`)}>
      <Suspense fallback={<div className={s.loader}>Loading...</div>}>
        <MainLayout
          header={<Header />}
          main={

            <AppRouter />
          }
          footer={<Footer />}
        />
      </Suspense>

    </div>
  );
};