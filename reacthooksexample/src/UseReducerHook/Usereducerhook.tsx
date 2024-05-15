import { useReducer } from "react";

interface State {
  count: number;
  error: string | null;
}

interface Action {
  type: "increment" | "decrement";
}

//step1: creating a function which will take state and action as arguments.
//based on the action, we are going to modify the state.
//so create State and Action interface above
function reducer(state: State, action: Action) {
  const { type } = action;

  switch (type) {
    case "increment": {
      const newCount = state.count + 1;
      const hasError = newCount > 5;
      return {
        // copy the state and then modify the state and then return the modified state
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? "Maximum Reached" : null,
      };
    }
    case "decrement": {
      const newCount = state.count - 1;
      const hasError = newCount < 0;
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? "Minimum Reached" : null,
      };
    }
    default:
      return state;
  }
}

export default function UseReducerExample() {
  //step2: pass function ans default values of state in the useReducer
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    error: null,
  });

  return (
    <div>
      <h2>Example on useReducer hook:</h2>
      <div>Count: {state.count}</div>
      {state.error && (
        <p>
          <b>{state.error}</b>
        </p>
      )}
      {/*step3: based on the type from dispactch the action will get applied on to the state */}
      <div>
        <button onClick={() => dispatch({ type: "increment" })}>
          Increment
        </button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>
      </div>
    </div>
  );
}
