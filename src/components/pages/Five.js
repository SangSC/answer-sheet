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
      className="flex flex-col content-center	 justify-center	"
      style={{ height: "100vh" }}
    >
      <div>
        <h1 className="text-center">{count}</h1>
        <div className="flex gap-4 justify-center">
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
