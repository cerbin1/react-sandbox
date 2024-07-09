import { useEffect } from "react";
import ProgressBar from "./ProgressBar";

const TIMER = 3000;

export default function QuestionStart({ handleAnswerTimeout }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      handleAnswerTimeout(-1);
    }, TIMER);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return <ProgressBar timer={TIMER} />;
}
