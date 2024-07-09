import Header from "./components/Header";
import ProgressBar from "./components/ProgressBar";
import Summary from "./components/Summary";
import questions from "./questions";
import { useState, useEffect } from "react";

const TIMER = 3000;

function App() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  const question = questions[questionIndex];

  useEffect(() => {
    const timer = setTimeout(() => {
      handleQuestionAnswer(-1);
    }, TIMER);
    return () => {
      clearTimeout(timer);
    };
  }, [questionIndex]);

  function handleQuestionAnswer(answerIndex) {
    if (answerIndex === -1) {
      setAnswers([
        ...answers,
        {
          question: question.text,
          answer: question.answers[0],
          result: "skipped",
        },
      ]);
    } else if (answerIndex === 0) {
      setAnswers([
        ...answers,
        {
          question: question.text,
          answer: question.answers[answerIndex],
          result: "correct",
        },
      ]);
    } else {
      setAnswers([
        ...answers,
        {
          question: question.text,
          answer: question.answers[answerIndex],
          result: "wrong",
        },
      ]);
    }

    setQuestionIndex(questionIndex + 1);
    if (questionIndex === questions.length - 1) {
      setGameOver(true);
    }
  }

  return (
    <>
      <Header />
      {!gameOver && (
        <div id="quiz">
          <div id="question-overview">
            <div id="question">
              <ProgressBar timer={TIMER} />
              <h2>{question.text}</h2>
            </div>
            <div id="answers">
              {question.answers.map((answer, index) => (
                <div key={answer} className="answer">
                  <button onClick={() => handleQuestionAnswer(index)}>
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
