import { useRef } from "react";

import Counter, { CounterRef } from "./Counter";

function UseImperativeHookExample() {
  //step6: creating ref with CounterRef type
  const counterRef = useRef<CounterRef>(null);

  return (
    <div>
      <Counter ref={counterRef} />
      {/*step7: calling reset() from Parent/here  */}
      <button onClick={() => counterRef.current?.reset()}>
        Reset from Parent
      </button>
    </div>
  );
}

export default UseImperativeHookExample;
