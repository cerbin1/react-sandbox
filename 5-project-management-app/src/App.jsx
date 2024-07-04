import { useState } from "react";
import CreateProjectForm from "./components/CreateProjectForm";
import CreateProjectButton from "./components/CreateProjectButton";
import ProjectDetails from "./components/ProjectDetails";
import ProjectList from "./components/ProjectList";
import NoProjectSelected from "./components/NoProjectSelected";

export default function App() {
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
  const [selectedProject, setSelectedProject] = useState();

  function handleCreateModeChange() {
    setSelectedProject(null);
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
    setSelectedProject(undefined);
  }

  function selectProjectHandler(project) {
    setSelectedProject(project);
  }

  function handleCancelCreateProject() {
    setSelectedProject(undefined);
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
      {selectedProject === null && (
        <CreateProjectForm
          createProject={handleCreateProject}
          cancelCreatingProject={handleCancelCreateProject}
        />
      )}
      {selectedProject === undefined && (
        <NoProjectSelected onCreateProjectClick={handleCreateModeChange} />
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
