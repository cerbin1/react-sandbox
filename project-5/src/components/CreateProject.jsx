import { useRef } from "react";
import InputGroup from "./InputGroup";
import TextareaGroup from "./TextareaGroup";

export default function CreateProject({ onSave, onCancel }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleProjectSave() {
    onSave({
      title: title.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value,
    });
  }

  return (
    <div className="w-4/5 text-center ">
      <div className="flex flex-col  mt-36 w-1/2 mx-auto ">
        <div className="flex justify-end">
          <button
            className="px-5 py-2 rounded hover:bg-black hover:text-white"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="px-5 py-2 rounded bg-black text-white hover:gray-900 hover:bg-gray-900"
            onClick={handleProjectSave}
          >
            Save
          </button>
        </div>
        <InputGroup label="Title" type="text" ref={title} />
        <TextareaGroup label="Description" ref={description} />
        <InputGroup label="Due Date" type="date" ref={dueDate} />
      </div>
    </div>
  );
}
