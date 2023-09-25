export const actionTypes = {
  TOGGLE_THEME: "TOGGLE_THEME",
};

export enum ThemeState {
  Light = "Light",
  Dark = "Dark",
}

export type ThemeAction = { type: string };
