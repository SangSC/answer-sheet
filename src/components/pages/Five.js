import React, { useState } from "react";

export default function Five() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div
      className="flex flex-col content-center	 justify-center"
      style={{ height: "70vh", minWidth: "500px" }}
    >
      <div>
        <h1 className="text-center">{count}</h1>
        <div className="flex gap-4 justify-center sm:flex-row gap-x-3 mx-auto">
          <button onClick={handleDecrement} className="decrement">
            Decrement
          </button>
          <button onClick={handleIncrement} className="increment">
            Increment
          </button>
        </div>
      </div>
    </div>
  );
}
