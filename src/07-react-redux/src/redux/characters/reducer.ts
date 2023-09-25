import {
  CharactersSetCharacterAction,
  CharactersSetLoadingAction,
  CharactersState,
  FetchCharactersThunkAction,
  SetCharacterPayload,
  SetLoadingPayload,
} from "./types.ts";
import { createSlice } from "@reduxjs/toolkit";

const initialState: CharactersState = {
  characters: {},
  loading: {},
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
      Array.from(Array(payload).keys()).map(async (_el, i) => {
        dispatch(setLoading({ index: i, value: true }));
        await fetch(
          `https://rickandmortyapi.com/api/character/${
            Math.floor(Math.random() * 824) + 1
          }`,
        )
          .then((res) => res.json())
          .then((data) => {
            dispatch(setCharacter({ index: i, imgSrc: data.image }));
          });
      });
  };

export const { setLoading, setCharacter, resetCharacters } =
  charactersSlice.actions;
