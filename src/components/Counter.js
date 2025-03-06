import React, { useState } from "react";
import Button from "./Button";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    setCount(count + 1); 
  };

  const duplicateFunction = () => {
    console.log("Duplicated function");
  };
  
  const anotherDuplicateFunction = () => {
    console.log("Duplicated function");
  };  

  throw new Error("Simulated Critical Bug")

  return (
    <div>
      <h1 data-testid="counttext">Count: {count}</h1>
      <Button onClick={increment} />
    </div>
  );
};

export default Counter;