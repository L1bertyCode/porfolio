import s from "./ProjectsItem.module.css";
interface ProjectsItemProps { };
export const ProjectsItem = ({ }: ProjectsItemProps) => {
  return (
    <div className={s.projectsItem}>
      <img src="" alt="project-img" />
      <div className={s.content}>
        <h4>Project Tile goes here</h4>
        <div className={s.desc}>This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content</div>
        <div className={s.stack}
        >Tech stack : HTML , JavaScript, SASS, React
        </div>
        <div>
          <a href="#">Live Preview</a>
          <a href="#">
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};