export default function Answers({ answers, onAnswer }) {
  return (
    <div id="answers">
      {answers.map((answer, index) => (
        <div key={answer} className="answer">
          <button onClick={(event) => onAnswer(event, index)}>{answer}</button>
        </div>
      ))}
    </div>
  );
}
