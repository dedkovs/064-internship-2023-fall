import { actionTypes, CounterColor } from "./types.ts";

export const counterIncrement = (payload: number) => ({
  type: actionTypes.INCREMENT,
  payload,
});

export const counterChangeColor = (payload: CounterColor) => ({
  type: actionTypes.CHANGE_COLOR,
  payload,
});
