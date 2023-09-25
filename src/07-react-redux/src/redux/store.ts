import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counter/reducer.ts";
import { CounterState } from "./counter/types.ts";
import { ThemeState } from "./theme/types.ts";
import { CharactersState } from "./characters/types.ts";
import { charactersSlice } from "./characters/reducer.ts";
import { themeSlice } from "./theme/reducer.ts";

export type AppState = {
  characters: CharactersState;
  counter: CounterState;
  theme: ThemeState;
};

export const store = configureStore({
  reducer: {
    characters: charactersSlice.reducer,
    counter: counterSlice.reducer,
    theme: themeSlice.reducer,
  },
});
