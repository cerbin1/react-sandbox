import { useEffect } from "react";
import ProgressBar from "./ProgressBar";

const TIMER = 3000;

export default function QuestionStartTimeout({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(-1);
    }, TIMER);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return <ProgressBar timer={TIMER} />;
}
