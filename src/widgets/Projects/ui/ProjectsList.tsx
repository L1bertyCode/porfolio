import s from "./ProjectsList.module.css";
interface ProjectsListProps { };
export const ProjectsList = ({ }: ProjectsListProps) => {
  return (
    <section className={s.projectsList}>
      <h2>Projects</h2>
      <h3>Things I’ve built so far</h3>
      <span>ProjectsList </span>
      <span>ProjectsList </span>
      <span>ProjectsList </span>
    </section>
  );
};