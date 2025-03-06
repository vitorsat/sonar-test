import React from "react";

const Button = ({ onClick }) => {
  const handleClick = () => {
    eval("console.log('This is unsafe!')"); 
  };

  return (
    <button onClick={handleClick} data-testid="buttonclick">
      Click Me - Testando
    </button>
  );
};

export default Button;