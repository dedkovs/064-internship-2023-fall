import { resetCharacters, setCharacter, setLoading } from "./actions.ts";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AppState } from "../store.ts";

export const actionTypes = {
  SET_LOADING: "SET_LOADING",
  SET_CHARACTER: "SET_CHARACTER",
  RESET_CHARACTERS: "RESET_CHARACTERS",
};

export type Loading = { [p: number]: boolean };
export type SetLoadingPayload = {
  index: number;
  value: boolean;
};

export type Characters = { [p: number]: string };
export type SetCharacterPayload = {
  index: number;
  imgSrc: string;
};

export type CharactersState = {
  characters: Characters;
  loading: Loading;
};

export type CharactersAction =
  | ReturnType<typeof setLoading>
  | ReturnType<typeof setCharacter>
  | (ReturnType<typeof resetCharacters> & { payload?: null });

export type FetchCharactersThunkAction = ThunkAction<
  void,
  AppState,
  unknown,
  CharactersAction
>;

export type FetchCharactersThunkDispatch = ThunkDispatch<
  AppState,
  unknown,
  CharactersAction
>;
