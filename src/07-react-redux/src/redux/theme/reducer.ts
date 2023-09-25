import { actionTypes, ThemeAction, ThemeState } from "./types.ts";

const initialState: ThemeState = ThemeState.Dark;

export const reducer = (
  state = initialState,
  action: ThemeAction,
): ThemeState => {
  switch (action.type) {
    case actionTypes.TOGGLE_THEME:
      return state === ThemeState.Dark ? ThemeState.Light : ThemeState.Dark;
    default:
      return state;
  }
};
