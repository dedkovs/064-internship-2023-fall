import {
  actionTypes,
  FetchCharactersThunkAction,
  SetCharacterPayload,
  SetErrorPayload,
  SetLoadingPayload,
} from "./types.ts";

export const setLoading = (payload: SetLoadingPayload) => ({
  type: actionTypes.SET_LOADING,
  payload,
});

export const setError = (payload: SetErrorPayload) => ({
  type: actionTypes.SET_ERROR,
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
