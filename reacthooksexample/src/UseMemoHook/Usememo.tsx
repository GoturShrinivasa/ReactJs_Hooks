import { useMemo, useState } from "react";
import { intialItems } from "./utils";

interface DemoProps {}

const Usememohook = ({}: DemoProps) => {
  const [count, setCount] = useState(0);
  const [items] = useState(intialItems);

  //const selectedItems = items.find((item) => item.isSelected);

  //   const selectedItems = useMemo(
  //     () => items.find((items) => items.isSelected),
  //     [items]
  //   );

  const selectedItems = useMemo(
    () => items.find((items) => items.id === count),
    [count, items]
  );

  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>Selected Items: {selectedItems?.id}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Usememohook;
