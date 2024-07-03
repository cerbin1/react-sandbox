import { useState, useRef } from "react";

export default function Player() {
  const input = useRef();
  const [playerName, setPlayerName] = useState("");

  return (
    <section id="player">
      <h2>Welcome {playerName ? playerName : "unknown entity"} </h2>
      <p>
        <input ref={input} type="text" />
        <button onClick={() => setPlayerName(input.current.value)}>
          Set Name
        </button>
      </p>
    </section>
  );
}
