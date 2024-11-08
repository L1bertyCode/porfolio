import s from "./AppRouter.module.css";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "@/pages/MainPage";
import { StackPage } from "@/pages/StackPage";
import { routesConfig } from "@/shared/config/routesConfig";
interface AppRouterProps { };
export const AppRouter = ({ }: AppRouterProps) => {
  return (
    <div className={s.appRouter}>
      <Routes>
        {Object.values(routesConfig).map(route => <Route key={route.path} path={route.path} element={route.element} />)}

      </Routes>
    </div>
  );
};