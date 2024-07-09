import Header from "./components/Header";
import questions from "./questions";
import { useState } from "react";

function App() {
  const [questionIndex, setQuestionIndex] = useState(0);

  const question = questions[questionIndex];

  return (
    <>
      <Header />
      <div id="quiz">
        <div id="question-overview">
          <div id="question">
            <h2>{question.text}</h2>
          </div>
          <div id="answers">
            {question.answers.map((answer) => (
              <div key={answer} className="answer">
                <button onClick={() => setQuestionIndex(questionIndex + 1)}>
                  {answer}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
