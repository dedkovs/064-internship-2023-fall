import { counterChangeColor, counterIncrement } from "./actions.ts";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AppState } from "../store.ts";
import { CharactersAction } from "../characters/types.ts";

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

export type CounterIncrementThunkAction = ThunkAction<
  void,
  AppState,
  unknown,
  CharactersAction | CounterAction
>;

export type CounterIncrementThunkDispatch = ThunkDispatch<
  AppState,
  unknown,
  CharactersAction | CounterAction
>;
