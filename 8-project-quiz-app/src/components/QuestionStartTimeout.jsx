import { useEffect } from "react";
import ProgressBar from "./ProgressBar";

const TIMER = 2000;

export default function QuestionStartTimeout({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, TIMER);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return <ProgressBar timer={TIMER} />;
}
