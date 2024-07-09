import QuestionTimer from "./QuestionTimer";

const ANSWER_TIME = 3000;
const NEW_QUESTION_TIME = 1500;

export default function Question({
  question,
  questionAnswered,
  onFinishQuestionFinish,
  onFinishQuestionStart,
}) {
  return (
    <div id="question">
      {questionAnswered && (
        <QuestionTimer
          time={NEW_QUESTION_TIME}
          onFinish={onFinishQuestionFinish}
          className="answered"
        />
      )}
      {!questionAnswered && (
        <QuestionTimer time={ANSWER_TIME} onFinish={onFinishQuestionStart} />
      )}

      <h2>{question}</h2>
    </div>
  );
}
