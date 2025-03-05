import React from "react";

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} data-testid="buttonclick">
      Click Me - Testando
    </button>
  );
};

export default Button;