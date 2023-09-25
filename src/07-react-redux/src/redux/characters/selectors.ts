import { AppState } from "../store.ts";

export const charactersSelector = (state: AppState) =>
  state.characters.characters;

export const loadingSelector = (state: AppState) => state.characters.loading;
