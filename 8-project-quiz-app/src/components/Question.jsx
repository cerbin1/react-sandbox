import { useEffect } from "react";

import ProgressBar from "./ProgressBar";

const TIMER = 3000;

export default function Question({ question, onHandle }) {
  useEffect(() => {
    const someTimer = setTimeout(() => {
      onHandle(-1);
    }, TIMER);

    return () => {
      clearTimeout(someTimer);
    };
  }, [onHandle]);

  return (
    <div id="question">
      <ProgressBar timer={TIMER} />
      <h2>{question}</h2>
    </div>
  );
}
