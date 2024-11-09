import { Text } from "@/shared/ui/Text/Text";
import s from "./Banner.module.css";
interface BannerProps { };
export const Banner = ({ }: BannerProps) => {
  return (
    <div className={s.banner}>
      <div>Banner</div>
      <h1>
        I'm <Text
          text={"Vyacheslav"}
          colorType="accent"
        /><br />
        Front-end<br />
        Developer
      </h1>
    </div>
  );
};