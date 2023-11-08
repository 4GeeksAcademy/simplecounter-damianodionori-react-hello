import React from "react";
import PropTypes from "prop-types";

const SimpleCounter = ({ counter }) => {
  const digitOne = Math.floor((counter / 1) % 10);
  const digitTwo = Math.floor((counter / 10) % 10);
  const digitThree = Math.floor((counter / 100) % 10);
  const digitFour = Math.floor((counter / 1000) % 10);

  return (
    <div className="bigCounter">
      <div className="calendar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          className="bi bi-clock"
          viewBox="0 0 30 30"
        >
          <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
        </svg>
      </div>
      <div className="four">{digitFour}</div>
      <div className="three">{digitThree}</div>
      <div className="two">{digitTwo}</div>
      <div className="one">{digitOne}</div>
    </div>
  );
}

SimpleCounter.propTypes = {
  counter: PropTypes.number,
};

export default SimpleCounter;
