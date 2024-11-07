import { Link, Route, Routes } from "react-router-dom";
import { MainLayout } from "../shared/layouts/MainLayout/MainLayout";
import s from "./App.module.css";
import { Suspense, useState } from "react";
import { MainPage } from "@/pages/MainPage";
import { StackPage } from "@/pages/StackPage";
import { Logo } from "@/shared/ui/Logo/Logo";

type Theme = "light" | "dark";

interface AppProps { };
export const App = ({ }: AppProps) => {
  const [theme, setTheme] = useState<Theme>("dark");

  const toggleTheme = () => {  setTheme(theme === "dark" ? "light" : "dark")};

  return (
    <div className={`${s.app} app_${theme}_theme`}>
      <MainLayout
        header={<>
          <Logo />
          <button onClick={toggleTheme}>
            Theme
          </button>
          <nav><Link to={"/"}>Home</Link>
            <Link to={"/stack"}>Teacj Stack</Link>
          </nav>

        </>}
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