import { useRef } from "react";

export default function ProjectDetails({
  project,
  onDeleteProject,
  onTaskCreate,
  onTaskDelete,
}) {
  const task = useRef();

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
      <div>
        <input
          className="my-4 py-0.5 px-4 mr-4 rounded bg-neutral-300"
          type="text"
          ref={task}
        />
        <button onClick={() => onTaskCreate(task.current.value)}>
          Add Task
        </button>
      </div>
      {project.tasks.length > 0 ? (
        <>
          {project.tasks.map((task, index) => (
            <div key={index} className="flex justify-between bg-amber-50">
              <p className="py-6 px-5">{task}</p>
              <button
                className="py-6 px-5 hover:text-red-600"
                onClick={() => onTaskDelete(index)}
              >
                Clear
              </button>
            </div>
          ))}
        </>
      ) : (
        <p>This project does not have any tasks yet.</p>
      )}
    </div>
  );
}
