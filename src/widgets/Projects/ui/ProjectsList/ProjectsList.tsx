import { ProjectsItem } from "../ProjectsItem/ProjectsItem";
import s from "./ProjectsList.module.css";
interface ProjectsListProps { };
export const ProjectsList = ({ }: ProjectsListProps) => {
  return (
    <section className={s.projectsList}>
      <h2>Projects</h2>
      <h3>Things I’ve built so far</h3>
      <ProjectsItem />
      <ProjectsItem />
      <ProjectsItem />
    </section>
  );
};