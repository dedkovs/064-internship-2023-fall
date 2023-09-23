import { counterChangeColor, counterIncrement } from "./actions.ts";

export const actionTypes = {
  INCREMENT: "INCREMENT",
  CHANGE_COLOR: "CHANGE_COLOR",
};

export enum CounterColor {
  Red = "Red",
  Green = "Green",
  Blue = "Blue",
}

export type CounterState = {
  value: number;
  color: CounterColor;
};

export type CounterAction =
  | ReturnType<typeof counterIncrement>
  | ReturnType<typeof counterChangeColor>;
