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
      />
      "
      <h3> Technologies I’ve been working with recently</h3>
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