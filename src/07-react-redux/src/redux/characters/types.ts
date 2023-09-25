import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AppState } from "../store.ts";

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

export type CharactersSetLoadingAction = {
  type: string;
  payload: SetLoadingPayload;
};

export type CharactersSetCharacterAction = {
  type: string;
  payload: SetCharacterPayload;
};

export type CharactersResetCharactersAction = { type: string };

export type CharactersAction =
  | CharactersSetLoadingAction
  | CharactersSetCharacterAction
  | CharactersResetCharactersAction;

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
