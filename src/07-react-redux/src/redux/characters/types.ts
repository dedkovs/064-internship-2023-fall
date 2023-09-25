import {
  resetCharacters,
  setCharacter,
  setError,
  setLoading,
} from "./actions.ts";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AppState } from "../store.ts";

export const actionTypes = {
  SET_LOADING: "SET_LOADING",
  SET_ERROR: "SET_ERROR",
  SET_CHARACTER: "SET_CHARACTER",
  RESET_CHARACTERS: "RESET_CHARACTERS",
};

export type Loading = { [p: number]: boolean };
export type SetLoadingPayload = {
  index: number;
  value: boolean;
};

export type Error = { [p: number]: boolean };
export type SetErrorPayload = {
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
  error: Error;
};

export type CharactersAction =
  | ReturnType<typeof setLoading>
  | ReturnType<typeof setError>
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
