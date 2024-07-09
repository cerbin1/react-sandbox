import Header from "./components/Header";
import ProgressBar from "./components/ProgressBar";
import questions from "./questions";
import { useState, useEffect } from "react";

const TIMER = 5000;

function App() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [points, setPoints] = useState(0);
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
    if (answerIndex === 0) {
      setPoints((prevPoints) => prevPoints + 1);
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
      {gameOver && (
        <>
          <p>Game Over</p> <p>Points: {points}</p>
        </>
      )}
    </>
  );
}

export default App;
