import CreateProjectButton from "./CreateProjectButton";

export default function NoProjectSelected({onCreateProjectClick}) {
  return (
    <div className="mx-auto text-center pt-48">
      <img className="w-16 h-16 mx-auto" src="logo.png" alt="logo - paper" />
      <h3 className="text-xl font-bold text-zinc-700 py-4">
        No Project Selected
      </h3>
      <p className="py-4 text-gray-500">
        Select a project or get started with a new one
      </p>
      <CreateProjectButton onButtonClick={onCreateProjectClick}>
        Create new project
      </CreateProjectButton>
    </div>
  );
}
