import { useState } from "react";

interface DemoProps {}

export default function Usestatehook({}: DemoProps) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>UseState Hook:</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
