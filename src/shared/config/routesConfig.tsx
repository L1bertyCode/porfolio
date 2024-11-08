import { MainPage } from "@/pages/MainPage";
import { StackPage } from "@/pages/StackPage";
import { RouteProps } from "react-router-dom";



export enum AppRoutes {
  MAIN = "main",
  STACK = "stack",
};

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.STACK]: "/stack"
};

export const routesConfig: Record<AppRoutes, RouteProps & { name: string; }> = {
  main: {
    path: "/",
    element: <MainPage />,
    name: "Home"
  }, stack: {
    path: "/stack",
    element: <StackPage />,
    name: "Teach Stack"
  }
};

// export const routesConfig: RouteType[] = [
//   {
//     path: "/",
//     element: <MainPage />,
//     name: "Home"
//   }
// ];