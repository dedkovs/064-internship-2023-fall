import { CounterColor } from "../../redux/counter/types.ts";
import RadioButtonClass from "./RadioButtonClass.tsx";
import { RadioButtonFunction } from "./RadioButtonFunction.tsx";

type Props = {
  color: CounterColor;
};

export const RadioButton = ({ color }: Props) => {
  return (
    <div className={"radioButton"}>
      <RadioButtonFunction color={color} />
      <RadioButtonClass color={color} />
    </div>
  );
};
