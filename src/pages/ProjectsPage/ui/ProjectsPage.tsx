import { ProjectsList } from "@/widgets/Projects";

interface ProjectsPageProps { };
const ProjectsPage = ({ }: ProjectsPageProps) => {
  return (
    <div >
      <div>ProjectsPage</div>
      <ProjectsList />
    </div>
  );
};

export default ProjectsPage;