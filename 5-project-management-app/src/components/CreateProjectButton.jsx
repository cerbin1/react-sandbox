export default function CreateProjectButton({ children, onButtonClick }) {
  return (
    <button
      className=" px-3 py-2 rounded-md bg-zinc-800 text-gray-400 hover:bg-zinc-700 hover:text-gray-300"
      onClick={onButtonClick}
    >
      {children}
    </button>
  );
}
