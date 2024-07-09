import QuestionFinishTimeout from "./QuestionFinishTimeout";
import QuestionStartTimeout from "./QuestionStartTimeout";

export default function Question({
  question,
  questionAnswered,
  onFinishQuestionFinish,
  onFinishQuestionStart,
}) {
  return (
    <div id="question">
      {questionAnswered && (
        <QuestionFinishTimeout onFinish={onFinishQuestionFinish} />
      )}
      {!questionAnswered && (
        <QuestionStartTimeout onFinish={onFinishQuestionStart} />
      )}

      <h2>{question}</h2>
    </div>
  );
}
