import React, { useState } from "react";
import Button from "./Button";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    setCount(count + 1); 
  };

  return (
    <div>
      <h1 data-testid="counttext">Count: {count}</h1>
      <Button onClick={increment} />
    </div>
  );
};

export default Counter;