import { thunkCounterIncrement } from "../redux/counter/actions.ts";
import { useDispatch } from "react-redux";
import { CounterIncrementThunkDispatch } from "../redux/counter/types.ts";

export const IncrementButtons = () => {
  const dispatch = useDispatch<CounterIncrementThunkDispatch>();

  return (
    <div className={"buttonsContainer"}>
      <button onClick={() => dispatch(thunkCounterIncrement(-10))}>-10</button>
      <button onClick={() => dispatch(thunkCounterIncrement(-1))}>-1</button>
      <button onClick={() => dispatch(thunkCounterIncrement(1))}>+1</button>
      <button onClick={() => dispatch(thunkCounterIncrement(10))}>+10</button>
    </div>
  );
};
