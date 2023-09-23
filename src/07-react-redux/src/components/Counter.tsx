import { useSelector } from "react-redux";
import {
  counterColorSelector,
  counterValueSelector,
} from "../redux/counter/selectors.ts";

export const Counter = () => {
  const counterValue = useSelector(counterValueSelector);
  const counterColor = useSelector(counterColorSelector);

  return <h1 style={{ color: counterColor.toLowerCase() }}>{counterValue}</h1>;
};
