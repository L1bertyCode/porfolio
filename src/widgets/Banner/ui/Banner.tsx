import { Text } from "@/shared/ui/Text/Text";
import s from "./Banner.module.css";
import Photo from "@/shared/assets/img/photo.jpg";

interface BannerProps { };
export const Banner = ({ }: BannerProps) => {
  return (
    <section className={s.banner}>
      <div className={s.title}>
        <Text
          text={`Hi,`} header="h1"
        />
        <br />
        <Text
          text={`I'm`} header="h1"
        />
        <Text
          text={"Vyacheslav"}
          colorType="accent"
          header="h1"
        />
        <br />
        <Text
          text={`Front-end Developer`} header="h1"
        />
      </div>
      <div className={s.photoWrapper}>
        <img
          className={s.photo} src={Photo}
          alt="photo" />
      </div>
    </section>
  );
};