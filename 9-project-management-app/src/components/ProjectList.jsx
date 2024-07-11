export default function ProjectList({ projects, onSelectProject }) {
  return (
    <>
      {projects.map((project) => (
        <h3
          className="text-gray-300 mx-12 mt-6 cursor-pointer hover:text-gray-50 hover:bg-zinc-900 py-1"
          key={project.title}
          onClick={() => {
            onSelectProject(project);
          }}
        >
          {project.title}
        </h3>
      ))}
    </>
  );
}
