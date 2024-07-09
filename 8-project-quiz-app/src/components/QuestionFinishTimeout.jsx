import { useEffect } from "react";
import ProgressBar from "./ProgressBar";

const TIMER = 1000;

export default function QuestionFinishTimeout({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, TIMER);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return <ProgressBar timer={TIMER} className="answered" />;
}
