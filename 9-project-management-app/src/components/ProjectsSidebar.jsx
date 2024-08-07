import Button from "./Button";
import ProjectList from "./ProjectList";

export default function ProjectsSidebar({ projects, onSelectProject, onCreateProjectClick }) {
  return (
    <div className="w-1/5 bg-black rounded-tr-2xl">
      <div className="pl-12">
        <h2 className="text-3xl font-bold mt-12 text-white p-12 uppercase">
          Your Projects
        </h2>
        <Button onClick={onCreateProjectClick}>
          + Add Project
        </Button>
      </div>
      <ProjectList projects={projects} onSelectProject={onSelectProject} />
    </div>
  );
}
