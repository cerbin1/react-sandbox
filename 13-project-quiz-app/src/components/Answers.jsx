export default function Answers({ answers, onAnswer }) {
  const shuffledAnswers = [...answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="answers">
      {shuffledAnswers.map((answer) => (
        <div key={answer} className="answer">
          <button onClick={(event) => onAnswer(event, answer)}>{answer}</button>
        </div>
      ))}
    </div>
  );
}
