import React, { useState, useEffect } from "react";
import SimpleCounter from "./simplecounter";

const Home = () => {
  const [counter, setCounter] = useState(0);
  const [targetTime, setTargetTime] = useState(10);
  const [isRunning, setIsRunning] = useState(true);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(true);
    setCounter(0);
  };

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    if (counter === targetTime) {
      window.alert("Target time reached!");
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning, counter, targetTime]);

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
