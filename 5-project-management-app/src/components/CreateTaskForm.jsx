import { useRef } from "react";

export default function CreateTaskForm({ onTaskCreate }) {
  const task = useRef();
  return (
    <>
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
    </>
  );
}
