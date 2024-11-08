import { Link, Route, Routes } from "react-router-dom";
import { MainLayout } from "../shared/layouts/MainLayout/MainLayout";
import s from "./App.module.css";
import { Suspense, useContext, useState } from "react";
import { MainPage } from "@/pages/MainPage";
import { StackPage } from "@/pages/StackPage";
import { Logo } from "@/shared/ui/Logo/Logo";

import { useTheme } from "./providers/context/useTheme";
import cn from "classnames";
import { AppRouter } from "./providers/router";
import { routesConfig } from "@/shared/config/routesConfig";

interface AppProps { };
export const App = ({ }: AppProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={cn(s.app, `app_${theme}_theme`)}>
      <MainLayout
        header={<>
          <Logo />
          <button onClick={toggleTheme}>
            Theme
          </button>
          <nav>
            {Object.values(routesConfig).map(route => <Link key={route.path} to={route.path || "/"}>{route.name}</Link>)}
          </nav>

        </>}
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