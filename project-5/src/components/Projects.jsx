import { useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([
    "Learning React",
    "Mastering React",
  ]);

  return (
    <div className="flex h-screen mt-8">
      <div className="w-1/5 bg-black rounded-tr-2xl">
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold mt-12 text-white p-12 uppercase">
            Your Projects
          </h2>
          <button className="bg-zinc-800 w-1/3 px-3 py-2 ml-12 rounded-md text-gray-400 hover:bg-zinc-700 hover:text-gray-300">
            + Add Project
          </button>
        </div>
        {projects.map((project) => (
          <h3
            className="text-gray-300 mx-12 mt-6 cursor-pointer hover:text-gray-50 hover:bg-zinc-900 py-1"
            key={project}
          >
            {project}
          </h3>
        ))}
      </div>
      <div className="mx-auto text-center pt-48">
        <img className="w-16 h-16 mx-auto" src="logo.png" alt="logo - paper" />
        <h3 className="text-xl font-bold text-zinc-700 py-4">
          No Project Selected
        </h3>
        <p className="py-4 text-gray-500">
          Select a project or get started with a new one
        </p>
        <button className="bg-zinc-800 py-2 px-1 rounded-md text-gray-400 hover:bg-zinc-700 hover:text-gray-300">
          Create new project
        </button>
      </div>
    </div>
  );
}