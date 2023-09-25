import {
  CounterChangeColorAction,
  CounterColor,
  CounterIncrementAction,
  CounterIncrementThunkAction,
  CounterState,
} from "./types.ts";
import { createSlice } from "@reduxjs/toolkit";
import {
  resetCharacters,
  thunkFetchCharacters,
} from "../characters/reducer.ts";

const initialState: CounterState = {
  value: 0,
  color: CounterColor.Red,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    counterIncrement(state: CounterState, action: CounterIncrementAction) {
      return {
        ...state,
        value: state.value + action.payload,
      };
    },
    counterChangeColor(state: CounterState, action: CounterChangeColorAction) {
      return { ...state, color: action.payload };
    },
  },
});

export const thunkCounterIncrement =
  (payload: number): CounterIncrementThunkAction =>
  (dispatch, getState) => {
    dispatch(resetCharacters());
    const numberOfCharacters = getState().counter.value + payload;
    dispatch(thunkFetchCharacters(numberOfCharacters));
    dispatch(counterIncrement(payload));
  };

export const { counterIncrement, counterChangeColor } = counterSlice.actions;
