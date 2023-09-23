import { counterIncrement } from "../redux/counter/actions.ts";
import { useDispatch } from "react-redux";

export const IncrementButtons = () => {
  const dispatch = useDispatch();

  return (
    <div className={"incrementButtonsContainer"}>
      <button onClick={() => dispatch(counterIncrement(-10))}>-10</button>
      <button onClick={() => dispatch(counterIncrement(-1))}>-1</button>
      <button onClick={() => dispatch(counterIncrement(1))}>+1</button>
      <button onClick={() => dispatch(counterIncrement(10))}>+10</button>
    </div>
  );
};
