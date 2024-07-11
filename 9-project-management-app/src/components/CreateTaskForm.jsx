import { useState } from "react";

export default function CreateTaskForm({ onTaskCreate }) {
  const [task, setTask] = useState("");

  function handleChange(event) {
    setTask(event.target.value);
  }

  return (
    <div>
      <input
        className="my-4 py-0.5 px-4 mr-4 rounded bg-neutral-300"
        type="text"
        onChange={handleChange}
      />
      <button onClick={() => onTaskCreate(task)}>Add Task</button>
    </div>
  );
}
