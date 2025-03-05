import React from "react";

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} data-testid="buttonclick">
      Click Me
    </button>
  );
};

export default Button;