import {
  CounterChangeColorAction,
  CounterColor,
  CounterIncrementAction,
  CounterState,
} from "./types.ts";
import { createSlice } from "@reduxjs/toolkit";

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

export const { counterIncrement, counterChangeColor } = counterSlice.actions;
