import quizComplete from "../assets/quiz-complete.png";

export default function Summary({ answers }) {
  const skipped = answers.filter(
    (answer) => answer.result === "skipped"
  ).length;
  const correct = answers.filter(
    (answer) => answer.result === "correct"
  ).length;
  const wrong = answers.filter((answer) => answer.result === "wrong").length;

  return (
    <div id="summary">
      <img src={quizComplete} alt="quiz-complete" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">
            {((skipped / answers.length) * 100).toFixed()}%
          </span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">
            {((correct / answers.length) * 100).toFixed()}%
          </span>
          <span className="text">Answered correctly</span>
        </p>
        <p>
          <span className="number">
            {((wrong / answers.length) * 100).toFixed()}%
          </span>
          <span className="text">Answered incorrectly</span>
        </p>
      </div>
      {answers.map((answer, index) => (
        <ol key={index}>
          <h3>{index + 1}</h3>
          <li className="question">{answer.question}</li>
          <li className={`user-answer ${answer.result}`}>{answer.answer}</li>
        </ol>
      ))}
    </div>
  );
}
