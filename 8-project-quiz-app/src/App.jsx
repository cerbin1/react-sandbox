import Header from "./components/Header";
import QuestionFinish from "./components/QuestionFinish";
import QuestionStart from "./components/QuestionStart";
import Summary from "./components/Summary";
import questions from "./questions";
import { useState } from "react";

const TIMER = 3000;

function App() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  const question = questions[questionIndex];

  function handleQuestionAnswer(answerIndex) {
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

    setAnswers([
      ...answers,
      {
        question: question.text,
        answer: questionAnswer,
        result: questionResult,
      },
    ]);

    setQuestionIndex(questionIndex + 1);
    setAnswered(true);
    if (questionIndex === questions.length - 1) {
      setGameOver(true);
    }
  }

  function handleQuestionPauseFinish() {
    setAnswered(false);
  }

  return (
    <>
      <Header />
      {!gameOver && (
        <div id="quiz">
          <div id="question-overview">
            <div id="question">
              {answered && (
                <QuestionFinish onFinish={handleQuestionPauseFinish} />
              )}
              {!answered && (
                <QuestionStart handleAnswerTimeout={handleQuestionAnswer} />
              )}

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
