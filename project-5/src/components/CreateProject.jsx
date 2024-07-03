import { useState, useRef } from "react";
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
        <div className="text-left my-2">
          <label className="uppercase text-gray-600 font-bold" htmlFor="title">
            Title
          </label>
          <input
            className="w-full py-2 px-4 border-b-2 border-neutral-400 bg-neutral-300"
            type="text"
            id="title"
            ref={title}
          />
        </div>
        <div className="text-left my-2">
          <label
            className="uppercase text-gray-600 font-bold"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            rows={3}
            className="w-full py-2 px-4 border-b-2 border-neutral-400 bg-neutral-300"
            type="text"
            id="description"
            ref={description}
          />
        </div>
        <div className="text-left my-2">
          <label
            className="uppercase text-gray-600 font-bold"
            htmlFor="due-date"
          >
            Due Date
          </label>
          <input
            className="w-full py-2 px-4 border-b-2 border-neutral-400 bg-neutral-300"
            type="date"
            id="due-date"
            ref={dueDate}
          />
        </div>
      </div>
    </div>
  );
}
