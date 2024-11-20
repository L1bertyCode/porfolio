import { Text } from "@/shared/ui/Text/Text";
import s from "./Stack.module.css";
import Ic from "@/shared/assets/source/Vector-1.svg";
interface StackProps { };
export const Stack = ({ }: StackProps) => {
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
      <br />
      <span>stack </span>
      <span>stack </span>
      <span>stack </span>
      <span>stack </span>
      <span>stack </span>
      <span>stack </span>
      <span>stack </span>
    </section>
  );
};