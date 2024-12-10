import { Text } from "@/shared/ui/Text/Text";
import s from "./Stack.module.css";
import { ReactComponent as Svg } from "@/shared/assets/source/Vector-1.svg";

import html from "@/shared/assets/img/stack/html.png";
import css from "@/shared/assets/img/stack/css.png";
import js from "@/shared/assets/img/stack/js.png";
import react from "@/shared/assets/img/stack/react.png";
import redux from "@/shared/assets/img/stack/redux.png";
import tailwind from "@/shared/assets/img/stack/tailwind.png";
import sass from "@/shared/assets/img/stack/sass.png";
import git from "@/shared/assets/img/stack/git.png";
import vscode from "@/shared/assets/img/stack/vscode.png";
import github from "@/shared/assets/img/stack/github.png";

interface StackProps { };
export const Stack = ({ }: StackProps) => {
  const stackList = [html, css, js, react, redux, tailwind, sass, git, vscode, vscode, vscode, github];
  return (
    <section className={s.stack}>
      <Text
        text="My Tech Stack"
        header="h2"
        colorType="primary"
      />
      <br />
      <Text
        text="Technologies I’ve been working with recently"
        header="h3"
      />
      <div className={s.stackList}>
        {/* <Svg /> */}
        {stackList.map((stack, i) => (
          <div
            className={s.stackItam}
            key={i}>
            <img src={stack} />
          </div>))}
      </div>

    </section>
  );
};