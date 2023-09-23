import {
  CounterColor,
  CounterState,
  actionTypes,
  CounterAction,
} from "./types.ts";

const initialState: CounterState = {
  value: 0,
  color: CounterColor.Red,
};

export const reducer = (
  state = initialState,
  action: CounterAction,
): CounterState => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        value: state.value + (action.payload as number),
      };
    case actionTypes.CHANGE_COLOR:
      return { ...state, color: action.payload as CounterColor };
    default:
      return state;
  }
};
