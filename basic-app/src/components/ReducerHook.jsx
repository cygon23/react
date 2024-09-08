import { useReducer } from "react";

export default function ReducerHook() {
  const [state, dispatch] = useReducer(reducer, 0);

  function reducer(state, action) {
    if (action.type === "increment") {
      return state + action.payload;
    } else if (action.type === "decrement") {
      return state - action.payload;
    }
  }

  return (
    <div>
      {state}
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        Decrement
      </button>
    </div>
  );
}
