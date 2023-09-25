import { ThemeState } from "./types.ts";
import { createSlice } from "@reduxjs/toolkit";

const initialState = ThemeState.Dark as ThemeState;

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme(state: ThemeState) {
      return state === ThemeState.Dark ? ThemeState.Light : ThemeState.Dark;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
