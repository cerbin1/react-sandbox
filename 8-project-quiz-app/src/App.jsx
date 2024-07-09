import Header from "./components/Header";
import questions from "./questions";
import { useState } from "react";

function App() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const question = questions[questionIndex];

  function handleQuestionAnswer() {
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
              <h2>{question.text}</h2>
            </div>
            <div id="answers">
              {question.answers.map((answer) => (
                <div key={answer} className="answer">
                  <button onClick={handleQuestionAnswer}>{answer}</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {gameOver && <p>Game Over</p>}
    </>
  );
}

export default App;
