import { RadioButton } from "./RadioButton.tsx";
import { CounterColor } from "../../redux/counter/types.ts";

export const RadioButtons = () => {
  return (
    <div className={"radioButtonsContainer"}>
      <div className={"componentType"}>
        <p>Functional components</p>
        <p>Class components</p>
      </div>
      <div className={"radioButtons"}>
        <RadioButton color={CounterColor.Red} />
        <RadioButton color={CounterColor.Green} />
        <RadioButton color={CounterColor.Blue} />
      </div>
    </div>
  );
};
