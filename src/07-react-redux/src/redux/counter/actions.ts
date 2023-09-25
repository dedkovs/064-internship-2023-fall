import {
  actionTypes,
  CounterColor,
  CounterIncrementThunkAction,
} from "./types.ts";
import {
  resetCharacters,
  thunkFetchCharacters,
} from "../characters/actions.ts";

export const counterIncrement = (payload: number) => ({
  type: actionTypes.INCREMENT,
  payload,
});

export const counterChangeColor = (payload: CounterColor) => ({
  type: actionTypes.CHANGE_COLOR,
  payload,
});

export const thunkCounterIncrement =
  (payload: number): CounterIncrementThunkAction =>
  (dispatch, getState) => {
    dispatch(resetCharacters());
    const numberOfCharacters = getState().counter.value + payload;
    dispatch(thunkFetchCharacters(numberOfCharacters));
    dispatch(counterIncrement(payload));
  };
