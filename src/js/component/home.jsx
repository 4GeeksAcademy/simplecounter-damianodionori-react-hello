import React, { useState, useEffect } from "react";
import SimpleCounter from "./simplecounter";

const Home = () => {
  const [counter, setCounter] = useState(60); // Set the initial count here
  const [isRunning, setIsRunning] = useState(true);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(true);
    setCounter(60); // Set the initial count here
  };

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setCounter((prevCounter) => prevCounter - 1); // Counting down
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  return (
    <div>
      <SimpleCounter initialCount={counter} />
      <div className="text-center mt-1">
        <div className="btn-group" role="group">
          <button className="btn btn-primary" onClick={handleStart} disabled={isRunning}>
            Resume
          </button>
          <button className="btn btn-secondary" onClick={handleStop} disabled={!isRunning}>
            Stop
          </button>
          <button className="btn btn-danger" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
