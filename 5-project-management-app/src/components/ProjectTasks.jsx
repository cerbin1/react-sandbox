export default function ProjectTasks({ tasks, onTaskDelete }) {
  return (
    <>
      {tasks?.length > 0 ? (
        <>
          {tasks.map((task, index) => (
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
    </>
  );
}
