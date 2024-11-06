import { Link, Route, Routes } from "react-router-dom";
import { MainLayout } from "../shared/layouts/MainLayout/MainLayout";
import s from "./App.module.css";
import { Suspense } from "react";
import { MainPage } from "@/pages/MainPage";
import { StackPage } from "@/pages/StackPage";
interface AppProps { };
export const App = ({ }: AppProps) => {
  return (
    <div className={s.app}>
      <MainLayout
        header={<div>
          <Link to={"/"}>Home</Link>
          <Link to={"/stack"}>Teacj Stack</Link>
        </div>}
        main={
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/stack" element={<StackPage />} />
            </Routes>
          </Suspense>
        }
        footer={<div>footer</div>}
      />
    </div>
  );
};