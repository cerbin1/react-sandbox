import { useState } from "react";
import CreateProjectForm from "./CreateProjectForm";
import CreateProjectButton from "./CreateProjectButton";
import ProjectDetails from "./ProjectDetails";
import ProjectList from "./ProjectList";

export default function Projects() {
  const [projects, setProjects] = useState([
    {
      title: "Learning React",
      description: "description",
      dueDate: "2022-01-01",
      tasks: ["task 1", "task 2", "task 3"],
    },
    {
      title: "Mastering React",
      description: "description",
      dueDate: "2022-01-01",
      tasks: ["task 1", "task 2", "task 3"],
    },
  ]);
  const [createMode, setCreateMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState();

  function handleCreateModeChange() {
    setCreateMode(true);
  }

  function handleCreateProject(project) {
    setProjects([
      ...projects,
      {
        title: project.title,
        description: project.description,
        dueDate: project.dueDate,
      },
    ]);
    setCreateMode(false);
  }
  
  function selectProjectHandler(project) {
    setSelectedProject(project);
  }

  function handleCancelProject() {
    setCreateMode(false);
  }

  function handleDeleteProject() {
    setProjects(projects.filter((project) => project !== selectedProject));
    setSelectedProject(undefined);
  }

  function handleTaskCreate(taskName) {
    const projectWithTaskAdded = {
      ...selectedProject,
      tasks: [...selectedProject.tasks, taskName],
    };
    setProjects(
      projects.map((project) =>
        project === selectedProject ? projectWithTaskAdded : project
      )
    );
    setSelectedProject(projectWithTaskAdded);
  }

  function handleTaskDelete(taskIndex) {
    const projectWithTaskRemoved = {
      ...selectedProject,
      tasks: selectedProject.tasks.filter(
        (_task, index) => index !== taskIndex
      ),
    };
    setProjects(
      projects.map((project) =>
        project === selectedProject ? projectWithTaskRemoved : project
      )
    );
    setSelectedProject(projectWithTaskRemoved);
  }

  return (
    <div className="flex h-screen mt-8">
      <div className="w-1/5 bg-black rounded-tr-2xl">
        <div className="pl-12">
          <h2 className="text-3xl font-bold mt-12 text-white p-12 uppercase">
            Your Projects
          </h2>
          <CreateProjectButton onButtonClick={handleCreateModeChange}>
            + Add Project
          </CreateProjectButton>
        </div>
        <ProjectList
          projects={projects}
          onSelectProject={selectProjectHandler}
        />
      </div>
      {createMode && (
        <CreateProjectForm
          createProject={handleCreateProject}
          cancelCreatingProject={handleCancelProject}
        />
      )}
      {!createMode && !selectedProject && (
        <div className="mx-auto text-center pt-48">
          <img
            className="w-16 h-16 mx-auto"
            src="logo.png"
            alt="logo - paper"
          />
          <h3 className="text-xl font-bold text-zinc-700 py-4">
            No Project Selected
          </h3>
          <p className="py-4 text-gray-500">
            Select a project or get started with a new one
          </p>
          <CreateProjectButton onButtonClick={handleCreateModeChange}>
            Create new project
          </CreateProjectButton>
        </div>
      )}
      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          onDeleteProject={handleDeleteProject}
          onTaskCreate={handleTaskCreate}
          onTaskDelete={handleTaskDelete}
        />
      )}
    </div>
  );
}
