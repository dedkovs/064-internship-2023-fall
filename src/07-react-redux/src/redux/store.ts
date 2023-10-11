import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counter/reducer.ts";
import { CounterState } from "./counter/types.ts";
import { ThemeState } from "./theme/types.ts";
import { themeSlice } from "./theme/reducer.ts";

export type AppState = {
  counter: CounterState;
  theme: ThemeState;
};

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    theme: themeSlice.reducer,
  },
});
