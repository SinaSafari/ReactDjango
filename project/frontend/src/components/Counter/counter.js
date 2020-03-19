import React, { useEffect, useState } from "react";

const counter = () => {
  const INCREMENTS = [1, 2, 5, 10];
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  });

  return (
    <div>
      <div className="text-center">Count: {count}</div>
      <div className="text-center">
        {INCREMENTS.map(value => {
          return (
            <button
              className="btn btn-primary btn-lg mx-3 px-4"
              onClick={() => setCount(count + value)}
              key={value}
            >
              +{value}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default counter;
