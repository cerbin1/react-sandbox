import Answers from "./components/Answers";
import Header from "./components/Header";
import QuestionFinishTimeout from "./components/QuestionFinishTimeout";
import QuestionStartTimeout from "./components/QuestionStartTimeout";
import Summary from "./components/Summary";
import questions from "./questions";
import { useState } from "react";

const TIMER = 3000;

function App() {
  const [nextQuestionIndex, setNextQuestionIndex] = useState(0);
  const [questionAnswered, setQuestionAnswered] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  const question = questions[nextQuestionIndex];

  function handleQuestionAnswer(event, answerIndex) {
    if (!questionAnswered) {
      const questionAnswer =
        question.answers[answerIndex === -1 ? 0 : answerIndex];
      let questionResult;
      if (answerIndex === -1) {
        questionResult = "skipped";
      } else if (answerIndex === 0) {
        questionResult = "correct";
      } else {
        questionResult = "wrong";
      }

      event.target.className = "selected " + questionResult;

      setAnswers([
        ...answers,
        {
          question: question.text,
          answer: questionAnswer,
          result: questionResult,
        },
      ]);

      setQuestionAnswered(true);
      if (nextQuestionIndex === questions.length - 1) {
        setGameOver(true);
      }
    }
  }

  function handleQuestionPauseFinish() {
    setQuestionAnswered(false);
    setNextQuestionIndex(nextQuestionIndex + 1);
  }

  return (
    <>
      <Header />
      {!gameOver && (
        <div id="quiz">
          <div id="question-overview">
            <div id="question">
              {questionAnswered && (
                <QuestionFinishTimeout onFinish={handleQuestionPauseFinish} />
              )}
              {!questionAnswered && (
                <QuestionStartTimeout onFinish={handleQuestionAnswer} />
              )}

              <h2>{question.text}</h2>
            </div>
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
