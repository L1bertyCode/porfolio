import { MainPage } from "@/pages/MainPage";
import { StackPage } from "@/pages/StackPage";
import { RouteProps } from "react-router-dom";



export enum AppRoutes {
  MAIN = "main",
  STACK = "stack",
  PROJECTS = "projects",
  CONTACTS = "contacts",
};

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.STACK]: "/stack",
  [AppRoutes.PROJECTS]: "/porjects",
  [AppRoutes.CONTACTS]: "/contacts"
};

export const routesConfig: Record<AppRoutes, RouteProps & { name: string; }> = {
  main: {
    path: RoutePaths.main,
    element: <MainPage />,
    name: "Home"
  },
  stack: {
    path: RoutePaths.stack,
    element: <StackPage />,
    name: "Teach Stack"
  },
  projects: {
    path: RoutePaths.projects,
    element: <StackPage />,
    name: "Projects"
  },
  contacts: {
    path: RoutePaths.contacts,
    element: <StackPage />,
    name: "Contacts"
  }
};

// export const routesConfig: RouteType[] = [
//   {
//     path: "/",
//     element: <MainPage />,
//     name: "Home"
//   }
// ];