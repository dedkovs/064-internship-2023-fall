export const actionTypes = {
  TOGGLE_THEME: "TOGGLE_THEME",
};

export enum ThemeModes {
  Light = "Light",
  Dark = "Dark",
}

export type ThemeState = ThemeModes.Light | ThemeModes.Dark;

export type ThemeAction = { type: string };
