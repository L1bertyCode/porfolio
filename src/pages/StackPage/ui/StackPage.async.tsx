import { lazy } from "react";

export const StackPageAsync = lazy(() => new Promise(res =>
  //@ts-ignore
  setTimeout(() => res(import("./StackPage")), 1500)
));