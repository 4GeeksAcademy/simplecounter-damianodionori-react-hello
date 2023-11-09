import React, { useState, useEffect } from "react";
import SecondsCounter from "./secondscounter";

const Home = () => {
  const [counter, setCounter] = useState(0);
  const [targetTime, setTargetTime] = useState(60);
  const [isCountingUp, setIsCountingUp] = useState(true);

  const handler = value => setIsCountingUp (value)

  const handleReset = () => {
    setCounter(0);
  };

  const handleCountdown = () => {
    setIsCountingUp(false);
    setCounter(targetTime);
  };

  useEffect(() => {
    let intervalId;

    if (isCountingUp !== null) {
      intervalId = setInterval(() => {
        setCounter((prevCounter) => {
          if ((isCountingUp && prevCounter === 10) || (!isCountingUp && prevCounter === 0)) {
            clearInterval(intervalId);
            window.alert(
              isCountingUp ? "Counter Up reached 10 seconds!" : "Countdown completed!"
            );
          }

          return isCountingUp ? prevCounter + 1 : prevCounter - 1;
        });
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isCountingUp]);

  return (
    <div>
      <SecondsCounter initialCount={counter} />
      <div className="text-center mt-3">
        <div className="btn-group button-group" role="group">
          <button className="btn btn-primary" onClick={() => handler(true)} disabled={isCountingUp !== null}>
            Resume
          </button>
          <button className="btn btn-secondary" onClick={() => handler(null)} disabled={isCountingUp === null}>
            Stop
          </button>
          <button className="btn btn-danger" onClick={handleReset}>
            Reset
          </button>
          <button className="btn btn-warning" onClick={handleCountdown} disabled={isCountingUp !== null}>
            Countdown
          </button>
          <button className="btn btn-success" onClick={() => handler(true)} disabled={isCountingUp !== null}>
            Count Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
