import Header from "./components/Header";
import QuestionFinishTimeout from "./components/QuestionFinishTimeout";
import QuestionStartTimeout from "./components/QuestionStartTimeout";
import Summary from "./components/Summary";
import questions from "./questions";
import { useState } from "react";

const TIMER = 3000;

function App() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [test, setTest] = useState();
  const [answers, setAnswers] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  const question = questions[questionIndex];

  function handleQuestionAnswer(event, answerIndex) {
    if (!answered) {
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

      setAnswered(true);
      if (questionIndex === questions.length - 1) {
        setGameOver(true);
      }
    }
  }

  function handleQuestionPauseFinish() {
    setAnswered(false);
    setQuestionIndex(questionIndex + 1);
  }

  return (
    <>
      <Header />
      {!gameOver && (
        <div id="quiz">
          <div id="question-overview">
            <div id="question">
              {answered && (
                <QuestionFinishTimeout onFinish={handleQuestionPauseFinish} />
              )}
              {!answered && (
                <QuestionStartTimeout onFinish={handleQuestionAnswer} />
              )}

              <h2>{question.text}</h2>
            </div>
            <div id="answers">
              {question.answers.map((answer, index) => (
                <div key={answer} className="answer">
                  <button
                    onClick={(event) => handleQuestionAnswer(event, index)}
                  >
                    {answer}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {gameOver && <Summary answers={answers} />}
    </>
  );
}

export default App;
