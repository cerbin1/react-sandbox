import { formatter } from "../util/investment";

export default function Result({ results }) {
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((yearResult) => (
          <tr key={yearResult.year}>
            <td>{yearResult.year}</td>
            <td>{formatter.format(yearResult.valueEndOfYear)}</td>
            <td>{formatter.format(yearResult.interest)}</td>
            <td>{formatter.format(yearResult.totalInterest)}</td>
            <td>{formatter.format(yearResult.investedCapital)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
