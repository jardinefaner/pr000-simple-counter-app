import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <main className="app">
      <Counter />
      <p>This is a counter app</p>
    </main>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  const handleMinusClick = () => setCount((prev) => prev - 1);
  const handlePlusClick = () => setCount((prev) => prev + 1);
  const handleReset = () => setCount(0);

  return (
    <>
      <div className="counter">
        <p className="count-display">{count}</p>
        <hr />
        <span className="buttons">
          <button onClick={handleMinusClick}>-</button>
          <button onClick={handlePlusClick}>+</button>
        </span>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
}
