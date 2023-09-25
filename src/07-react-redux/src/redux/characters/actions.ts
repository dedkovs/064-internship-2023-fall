import {
  actionTypes,
  FetchCharactersThunkAction,
  SetCharacterPayload,
  SetLoadingPayload,
} from "./types.ts";

export const setLoading = (payload: SetLoadingPayload) => ({
  type: actionTypes.SET_LOADING,
  payload,
});

export const setCharacter = (payload: SetCharacterPayload) => ({
  type: actionTypes.SET_CHARACTER,
  payload,
});

export const resetCharacters = () => ({
  type: actionTypes.RESET_CHARACTERS,
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
