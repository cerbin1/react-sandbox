import { useState, useEffect } from "react";

export default function ProgressBar({ timer, ...props }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress {...props} value={remainingTime} max={timer} />;
}
