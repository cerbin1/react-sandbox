import { useEffect } from "react";
import ProgressBar from "./ProgressBar";

export default function QuestionTimer({ time, onFinish, ...rest }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, time);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return <ProgressBar timer={time} {...rest} />;
}
