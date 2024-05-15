//step1: import forwardRef
import { Ref, forwardRef, useState, useImperativeHandle } from "react";

interface counterProps {}

//step4: creating a type for Ref and this will have reset() that we want to accept from parent
export type CounterRef = {
  reset: () => void;
};

//step3: counter component which will accept ref from its parent
function Counter({}: counterProps, ref: Ref<CounterRef>) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  //we want to expose this function to the parent
  const reset = () => {
    setCount(0);
  };

  //step5
  useImperativeHandle(ref, () => ({
    reset,
  }));

  return (
    <div>
      <p>Count: {count}</p>
      <div>
        <button onClick={increment}>Increment</button>
      </div>
      <div>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}

//and pass the current component to forwardRef,
//by this the Current component will get the access to accept ref from the parent
export default forwardRef(Counter);
