import { useState, useEffect } from "react";

interface DemoProps {}

const Useeffecthook = ({}: DemoProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //code that wanted to run
    console.log("count:", count);

    //optional return function
    return () => {
      console.log("I am being cleaned up!");
    };
  }, [count]);

  return (
    <div>
      <h1>UseEffect Hook:</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Useeffecthook;
