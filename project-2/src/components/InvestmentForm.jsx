import Input from "./Input";

export default function InvestmentForm({ investmentData, onChange }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <Input
          id="initialInvestment"
          value={investmentData.initialInvestment}
          onChange={onChange}
        >
          Initial investment
        </Input>
        <Input
          id="annualInvestment"
          value={investmentData.annualInvestment}
          onChange={onChange}
        >
          Annual investment
        </Input>
      </div>
      <div className="input-group">
        <Input
          id="expectedReturn"
          value={investmentData.expectedReturn}
          onChange={onChange}
        >
          Expected return
        </Input>
        <Input
          id="duration"
          value={investmentData.duration}
          onChange={onChange}
        >
          Duration
        </Input>
      </div>
    </div>
  );
}
