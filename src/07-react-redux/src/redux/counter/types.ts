import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AppState } from "../store.ts";
import { CharactersAction } from "../characters/types.ts";

export enum CounterColor {
  Red = "Red",
  Green = "Green",
  Blue = "Blue",
}

export type CounterState = {
  value: number;
  color: CounterColor;
};

export type CounterIncrementAction = { type: string; payload: number };

export type CounterChangeColorAction = { type: string; payload: CounterColor };

export type CounterAction = CounterIncrementAction | CounterChangeColorAction;

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
