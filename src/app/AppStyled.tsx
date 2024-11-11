import { Link, Route, Routes } from "react-router-dom";
import { MainLayout } from "../shared/layouts/MainLayout/MainLayout";
import s from "./App.module.css";
import { Suspense } from "react";

import { useTheme } from "./providers/context/useTheme";
import { AppRouter } from "./providers/router";

import cn from "classnames";
import { HeaderStyled } from "@/widgets/Header";

interface AppProps { };
export const AppStyled = ({ }: AppProps) => {
  const { theme } = useTheme();
  return (
    <div className={cn(s.app, `app_${theme}_theme`)}>
      <MainLayout
        header={<HeaderStyled />}
        main={
          <Suspense fallback={<div>Loading...</div>}>
            <AppRouter />
          </Suspense>
        }
        footer={<div>footer</div>}
      />
    </div>
  );
};