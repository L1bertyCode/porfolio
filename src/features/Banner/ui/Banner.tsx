import { Text } from "@/shared/ui/Text/Text";
import s from "./Banner.module.css";
import Photo from "@/shared/assets/img/photo.jpg";

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
      <span className={s.photoWrapper}>
        <img
          className={s.photo} src={Photo}
          alt="photo" />
      </span>
    </div>
  );
};