export default function Answers({ answers, onAnswer }) {
  return (
    <div id="answers">
      {answers.map((answer) => (
        <div key={answer} className="answer">
          <button onClick={(event) => onAnswer(event, answer)}>{answer}</button>
        </div>
      ))}
    </div>
  );
}
