import ProjectTasks from "./ProjectTasks";
import CreateTaskForm from "./CreateTaskForm";

export default function ProjectDetails({
  project,
  onDeleteProject,
  onTaskCreate,
  onTaskDelete,
}) {
  return (
    <div className="w-4/5 py-24 px-10 mr-60">
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold">{project.title}</h2>
        <button
          onClick={() => onDeleteProject(project)}
          className="hover:text-gray-800"
        >
          Delete
        </button>
      </div>
      <p className="py-4 text-gray-500">{project.dueDate}</p>
      <p>{project.description}</p>
      <hr className="my-4 border-gray-500 border-1" />
      <h3 className="text-2xl font-bold">Tasks</h3>
      <CreateTaskForm onTaskCreate={onTaskCreate} /* props drilling! */ />
      <ProjectTasks tasks={project.tasks} onTaskDelete={onTaskDelete} />
    </div>
  );
}
