import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import SimpleCounter from "./simplecounter";

const Home = () => {
  const [counter, setCounter] = useState(0);
  const [targetTime, setTargetTime] = useState(60);
  const [isCountingUp, setIsCountingUp] = useState(true);

  const handleStart = () => {
    setIsCountingUp(true);
  };

  const handleStop = () => {
    setIsCountingUp(false);
  };

  const handleReset = () => {
    setIsCountingUp(true);
    setCounter(0);
  };

  const handleCountdown = () => {
    setIsCountingUp(false);
    setCounter(targetTime);
  };

  const handleCountUp = () => {
    setIsCountingUp(true);
  };

  useEffect(() => {
    let intervalId;

    if (isCountingUp) {
      intervalId = setInterval(() => {
        setCounter((prevCounter) => {
          if (prevCounter === 10) {
            clearInterval(intervalId);
            window.alert("Counter Up reached 10 seconds!");
          }
          return prevCounter + 1;
        });
      }, 1000);
    } else {
      intervalId = setInterval(() => {
        setCounter((prevCounter) => prevCounter - 1);
      }, 1000);
    }

    if ((isCountingUp && counter === targetTime) || (!isCountingUp && counter === 0)) {
      clearInterval(intervalId);
      window.alert(isCountingUp ? "Count Up completed!" : "Countdown completed!");
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isCountingUp, counter, targetTime]);

  return (
    <div>
      <SimpleCounter initialCount={counter} />
      <div className="text-center mt-1">
        <div className="btn-group" role="group">
          <button className="btn btn-primary" onClick={handleStart} disabled={isCountingUp}>
            Resume
          </button>
          <button className="btn btn-secondary" onClick={handleStop} disabled={!isCountingUp}>
            Stop
          </button>
          <button className="btn btn-danger" onClick={handleReset}>
            Reset
          </button>
          <button className="btn btn-warning" onClick={handleCountdown} disabled={!isCountingUp}>
            Countdown
          </button>
          <button className="btn btn-success" onClick={handleCountUp} disabled={isCountingUp}>
            Count Up
          </button>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
