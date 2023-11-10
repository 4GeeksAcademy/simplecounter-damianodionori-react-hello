import React from "react";

const Button = ({ onClick, disabled, label, btnClass }) => (
  <button className={`btn ${btnClass}`} onClick={onClick} disabled={disabled}>
    {label}
  </button>
);

export default Button;