export default function Input({ children, ...props }) {
  return (
    <p>
      <label>
        {children}
        <input {...props} type="number" required />
      </label>
    </p>
  );
}
