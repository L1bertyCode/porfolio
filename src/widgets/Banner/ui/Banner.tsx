import { Text } from "@/shared/ui/Text/Text";
import s from "./Banner.module.css";
import Photo from "@/shared/assets/img/photo.jpg";

interface BannerProps { };
export const Banner = ({ }: BannerProps) => {
  return (
    <section className={s.banner}>
      <h1>
        I'm <Text
          text={"Vyacheslav"}
          colorType="accent"
        /><br />
        Front-end<br />
        Developer
      </h1>
      <div className={s.photoWrapper}>
        <img
          className={s.photo} src={Photo}
          alt="photo" />
      </div>
    </section>
  );
};