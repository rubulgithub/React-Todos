import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [incrementValue, setIncrementValue] = useState(1);
  const [decrementValue, setDecrementValue] = useState(1);

  const increment = () => {
    setCount(count + incrementValue);
  };

  const decrement = () => {
    // Ensure the counter doesn't go below 0
    setCount(count >= decrementValue ? count - decrementValue : 0);
  };

  const handleIncrementValueChange = (e) => {
    setIncrementValue(parseInt(e.target.value, 10) || 0);
  };

  const handleDecrementValueChange = (e) => {
    setDecrementValue(parseInt(e.target.value, 10) || 0);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <div>
        <label>Increment Value:</label>
        <input
          type="number"
          value={incrementValue}
          onChange={handleIncrementValueChange}
        />
        <button onClick={increment}>Increment by {count}</button>
      </div>
      <div>
        <label>Decrement Value:</label>
        <input
          type="number"
          value={decrementValue}
          onChange={handleDecrementValueChange}
        />
        <button onClick={decrement}>Decrement by {count}</button>
      </div>
    </div>
  );
};

export default Counter;
