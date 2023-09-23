import { actionTypes, ThemeAction, ThemeModes, ThemeState } from "./types.ts";

const initialState: ThemeState = ThemeModes.Dark;

export const reducer = (
  state = initialState,
  action: ThemeAction,
): ThemeState => {
  switch (action.type) {
    case actionTypes.TOGGLE_THEME:
      return state === ThemeModes.Dark ? ThemeModes.Light : ThemeModes.Dark;
    default:
      return state;
  }
};
