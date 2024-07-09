import quizComplete from "../assets/quiz-complete.png";
import SummaryStat from "./summary/SummaryStat";

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
        <SummaryStat number={skipped} answersCount={answers.length}>
          Skipped
        </SummaryStat>

        <SummaryStat number={correct} answersCount={answers.length}>
          Answered correctly
        </SummaryStat>

        <SummaryStat number={wrong} answersCount={answers.length}>
          Answered incorrectly
        </SummaryStat>
      </div>
      {answers.map((answer, index) => (
        <ol key={index}>
          <h3>{index + 1}</h3>
          <li className="question">{answer.question}</li>
          <li className={`user-answer ${answer.result}`}>
            {answer.answer ? answer.answer : "Skipped"}
          </li>
        </ol>
      ))}
    </div>
  );
}
