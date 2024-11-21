import { Text } from "@/shared/ui/Text/Text";
import s from "./ProjectsItem.module.css";
import img from "@/shared/assets/img/itemBg3.png";

interface ProjectsItemProps { };
export const ProjectsItem = ({ }: ProjectsItemProps) => {
  return (
    <div className={s.projectsItem}>
      <img src={img} alt="project-img" className={s.img} />
      <div className={s.content}>
        <Text
          text={"Project Tile goes here"}
          header="h4"
          colorType="primary"
        />

        <div className={s.description}>This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content</div>
        <div className={s.stack}
        >Tech stack : HTML , JavaScript, SASS, React
        </div>
        <div className={s.links}>
          <a href="#">
            <Text
              text={"Live Preview"}
              colorType="primary"
            />
          </a>
          <a href="#">
            <Text
              text={"View Code"}
              colorType="primary"
            />
          </a>
        </div>
      </div>
    </div>
  );
};