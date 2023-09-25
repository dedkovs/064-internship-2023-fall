import {
  CharactersSetCharacterAction,
  CharactersSetErrorAction,
  CharactersSetLoadingAction,
  CharactersState,
  FetchCharactersThunkAction,
  SetCharacterPayload,
  SetErrorPayload,
  SetLoadingPayload,
} from "./types.ts";
import { createSlice } from "@reduxjs/toolkit";

const initialState: CharactersState = {
  characters: {},
  loading: {},
  error: {},
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setLoading(state: CharactersState, action: CharactersSetLoadingAction) {
      return {
        ...state,
        loading: {
          ...state.loading,
          [(action.payload as SetLoadingPayload).index]: (
            action.payload as SetLoadingPayload
          ).value,
        },
      };
    },
    setError(state: CharactersState, action: CharactersSetErrorAction) {
      return {
        ...state,
        error: {
          ...state.error,
          [(action.payload as SetErrorPayload).index]: (
            action.payload as SetErrorPayload
          ).value,
        },
      };
    },
    setCharacter(state: CharactersState, action: CharactersSetCharacterAction) {
      return {
        ...state,
        characters: {
          ...state.characters,
          [(action.payload as SetCharacterPayload).index]: (
            action.payload as SetCharacterPayload
          ).imgSrc,
        },
      };
    },
    resetCharacters() {
      return initialState;
    },
  },
});

export const thunkFetchCharacters =
  (payload: number): FetchCharactersThunkAction =>
  async (dispatch) => {
    payload > 0 &&
      Array.from(Array(payload).keys()).map(async (i) => {
        dispatch(setLoading({ index: i, value: true }));
        dispatch(setError({ index: i, value: false }));
        await fetch(
          `https://rickandmortyapi.com/api/character/${Math.floor(
            Math.random() * 826 + 1,
          )}`,
        )
          .then((res) => {
            if (!res.ok) {
              throw new Error();
            }
            return res.json();
          })
          .then((data) => {
            dispatch(setCharacter({ index: i, imgSrc: data.image }));
          })
          .catch(() => {
            dispatch(setLoading({ index: i, value: false }));
            dispatch(setError({ index: i, value: true }));
          });
      });
  };

export const { setLoading, setError, setCharacter, resetCharacters } =
  charactersSlice.actions;
