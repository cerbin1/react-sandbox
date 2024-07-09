export default function SummaryStat({ number, answersCount, children }) {
  return (
    <p>
      <span className="number">
        {((number / answersCount) * 100).toFixed()}%
      </span>
      <span className="text">{children}</span>
    </p>
  );
}
