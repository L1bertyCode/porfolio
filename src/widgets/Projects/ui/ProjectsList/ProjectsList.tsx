import { Text } from "@/shared/ui/Text/Text";
import { ProjectsItem } from "../ProjectsItem/ProjectsItem";
import s from "./ProjectsList.module.css";
import { AppButton } from "@/shared/ui/AppButton/AppButton";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { RoutePaths } from "@/shared/config/routesConfig";
interface ProjectsListProps { };
export const ProjectsList = ({ }: ProjectsListProps) => {
  const projects = [
    {
      name: "Todolist",
      description: "Todolist,Todolist,Todolist,Todolist,Todolist,Todolist,Todolist,Todolist",
      stack: ["HTML", "CSS", "JS", "React",],
      site: "https://github.com/L1bertyCode/todolist",
      github: "https://github.com/L1bertyCode/todolist"

    }
  ];
  return (
    <section className={s.projectsList}>
      <Text
        text={"Projects"}
        header="h2"
        colorType="primary"
        className="sectionTitle"
      />
      <br />
      <Text
        text={"Things I’ve built so far"}
        header="h3"
        className="sectionSupTitle"
      />
      <div className={s.list}>
        <ProjectsItem />
        <ProjectsItem />
        <ProjectsItem />
        {/* <ProjectsItem /> */}
        <AppLink
          className={s.seeMore}
          to={RoutePaths.projects}
        >See more</AppLink>
      </div>
    </section>
  );
};