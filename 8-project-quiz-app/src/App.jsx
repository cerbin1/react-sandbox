import Answers from "./components/Answers";
import Header from "./components/Header";
import Question from "./components/Question";
import Summary from "./components/Summary";
import QUESTIONS from "./questions";
import { useState } from "react";

function App() {
  const [nextQuestionIndex, setNextQuestionIndex] = useState(0);
  const [questionAnswered, setQuestionAnswered] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  const question = QUESTIONS[nextQuestionIndex];

  function handleQuestionAnswer(event, answerIndex) {
    if (!questionAnswered) {
      const questionAnswer =
        question.answers[answerIndex === -1 ? 0 : answerIndex];
      let questionResult;
      if (answerIndex === -1) {
        questionResult = "skipped";
      } else if (answerIndex === 0) {
        questionResult = "correct";
        event.target.className = "selected " + questionResult;
      } else {
        questionResult = "wrong";
        event.target.className = "selected " + questionResult;
      }

      setAnswers([
        ...answers,
        {
          question: question.text,
          answer: questionAnswer,
          result: questionResult,
        },
      ]);

      setQuestionAnswered(true);
      if (nextQuestionIndex === QUESTIONS.length - 1) {
        setGameOver(true);
      }
    }
  }

  function handleQuestionPauseFinish() {
    setQuestionAnswered(false);
    setNextQuestionIndex(nextQuestionIndex + 1);
  }

  function handleQuestionSkip() {
    handleQuestionAnswer(null, -1);
  }

  return (
    <>
      <Header />
      {!gameOver && (
        <div id="quiz">
          <div id="question-overview">
            <Question
              question={question.text}
              questionAnswered={questionAnswered}
              onFinishQuestionFinish={handleQuestionPauseFinish}
              onFinishQuestionStart={handleQuestionSkip}
            />
            <Answers
              answers={question.answers}
              onAnswer={handleQuestionAnswer}
            />
          </div>
        </div>
      )}
      {gameOver && <Summary answers={answers} />}
    </>
  );
}

export default App;
