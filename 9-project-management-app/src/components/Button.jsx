export default function Button({ children, ...props }) {
  return (
    <button
      className=" px-3 py-2 rounded-md bg-zinc-800 text-gray-400 hover:bg-zinc-700 hover:text-gray-300"
      {...props}
    >
      {children}
    </button>
  );
}
