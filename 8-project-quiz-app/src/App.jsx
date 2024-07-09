import Answers from "./components/Answers";
import Header from "./components/Header";
import Question from "./components/Question";
import Summary from "./components/summary/Summary";
import QUESTIONS from "./questions";
import { useState } from "react";

function App() {
  const [nextQuestionIndex, setNextQuestionIndex] = useState(0);
  const [questionAnswered, setQuestionAnswered] = useState(false);
  const [answers, setAnswers] = useState([]);

  const gameOver = nextQuestionIndex === QUESTIONS.length;
  const question = QUESTIONS[nextQuestionIndex];

  function handleQuestionAnswer(event, answer) {
    if (!questionAnswered) {
      let questionResult;
      if (answer) {
        questionResult = answer === question.answers[0] ? "correct" : "wrong";
      } else {
        questionResult = "skipped";
      }

      if (event) {
        event.target.className = "selected " + questionResult;
      }

      setAnswers([
        ...answers,
        {
          question: question.text,
          answer: answer,
          result: questionResult,
        },
      ]);

      setQuestionAnswered(true);
    }
  }

  function handleQuestionPauseFinish() {
    setQuestionAnswered(false);
    setNextQuestionIndex(nextQuestionIndex + 1);
  }

  function handleQuestionSkip() {
    handleQuestionAnswer();
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
