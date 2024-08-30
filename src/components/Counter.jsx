import { useState } from "react";

export default function Counter() {
  /*state variable count is used as the name for state aslo  the function is for s
    making changes in components so called multiple state component */
  //state variable 1
  const [count, setCount] = useState(0);
  //state variable two
  const [increamentBy, setIncrementBy] = useState(1);
  function increaseIncriment() {
    setIncrementBy(increamentBy + 1);
  }

  function decreaseIncriment() {
    setIncrementBy(increamentBy - 1);
  }
  function handleClick() {
    setCount(count + increamentBy);
  }

  function handleDecrement() {
    setCount(count - increamentBy);
  }
  return (
    <div>
      <h2> Count Value is:{count}</h2>
      <button onClick={handleClick}>Incriment</button>
      <button onClick={handleDecrement}>Decrement</button>

      <h1>We are incremnt value by:{increamentBy}</h1>
      <button onClick={increaseIncriment}>Increment</button>
      <button onClick={decreaseIncriment}>Decrement</button>
    </div>
  );
}
