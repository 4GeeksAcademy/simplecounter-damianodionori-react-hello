import React from "react";
import PropTypes from "prop-types";

function SimpleCounter({ counter }) {
  const digitOne = counter % 10;
  const digitTwo = Math.floor((counter / 10) % 10);
  const digitThree = Math.floor((counter / 100) % 10);
  const digitFour = Math.floor((counter / 1000) % 10);

  return (
    <div className="bigCounter">
      <div className="calendar">
        <i className="fa-solid fa-clock"></i>
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
