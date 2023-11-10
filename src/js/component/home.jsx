import React, { useState, useEffect } from "react";
import SecondsCounter from "./secondscounter";
import Button from "./buttons";

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
        <Button
          onClick={() => handler(true)}
          disabled={isCountingUp !== null}
          label="Resume"
          btnClass="btn-primary"
        />
        <Button
          onClick={() => handler(null)}
          disabled={isCountingUp === null}
          label="Stop"
          btnClass="btn-secondary"
        />
        <Button
          onClick={handleReset}
          label="Reset"
          btnClass="btn-danger"
        />
        <Button
          onClick={handleCountdown}
          disabled={isCountingUp !== null}
          label="Countdown"
          btnClass="btn-warning"
        />
        <Button
          onClick={() => handler(true)}
          disabled={isCountingUp !== null}
          label="Count Up"
          btnClass="btn-success"
        />
      </div>
    </div>
    </div>
  );
};

export default Home;
