import { forwardRef } from "react";

const InputGroup = forwardRef(function InputGroup({ label, type }, ref) {
  return (
    <div className="text-left my-2">
      <label className="uppercase text-gray-600 font-bold">
        {label}
        <input
          type={type}
          className="w-full py-2 px-4 border-b-2 border-neutral-400 bg-neutral-300 focus:outline-none focus:border-stone-600"
          ref={ref}
        />
      </label>
    </div>
  );
});
export default InputGroup;
