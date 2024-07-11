import { useState } from "react";
import Header from "./components/Header.jsx";
import { calculateInvestmentResults } from "./util/investment";
import Result from "./components/Results.jsx";
import InvestmentForm from "./components/InvestmentForm.jsx";

function calculate(investmentData) {
  const result = calculateInvestmentResults(investmentData);
  for (let i = 0; i < result.length; i++) {
    result[i].totalInterest = calculateTotalInterest(i);
    result[i].investedCapital =
      Number.parseInt(investmentData.initialInvestment) +
      result[i].annualInvestment * result[i].year;
  }

  return result;

  function calculateTotalInterest(i) {
    let totalInterest = result[i].interest;
    for (let j = 0; j < i; j++) {
      totalInterest += result[j].interest;
    }
    return totalInterest;
  }
}

function App() {
  const [investmentData, setInvestmentData] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = investmentData.duration > 0;

  const investmentResultByYear = calculate(investmentData);

  function handleChange(event) {
    setInvestmentData((previousInvestmentData) => {
      return {
        ...previousInvestmentData,
        [event.target.id]: +event.target.value,
      };
    });
  }

  return (
    <>
      <Header />
      <InvestmentForm investmentData={investmentData} onChange={handleChange} />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
      {inputIsValid && <Result results={investmentResultByYear} />}
    </>
  );
}

export default App;
