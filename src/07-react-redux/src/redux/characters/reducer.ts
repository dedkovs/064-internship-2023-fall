import {
  actionTypes,
  CharactersAction,
  CharactersState,
  SetCharacterPayload,
  SetErrorPayload,
  SetLoadingPayload,
} from "./types.ts";

const initialState: CharactersState = {
  characters: {},
  loading: {},
  error: {},
};

export const reducer = (
  state = initialState,
  action: CharactersAction,
): CharactersState => {
  switch (action.type) {
    case actionTypes.SET_LOADING:
      return {
        ...state,
        loading: {
          ...state.loading,
          [(action.payload as SetLoadingPayload).index]: (
            action.payload as SetLoadingPayload
          ).value,
        },
      };
    case actionTypes.SET_ERROR:
      return {
        ...state,
        error: {
          ...state.error,
          [(action.payload as SetErrorPayload).index]: (
            action.payload as SetErrorPayload
          ).value,
        },
      };
    case actionTypes.SET_CHARACTER:
      return {
        ...state,
        characters: {
          ...state.characters,
          [(action.payload as SetCharacterPayload).index]: (
            action.payload as SetCharacterPayload
          ).imgSrc,
        },
      };
    case actionTypes.RESET_CHARACTERS:
      return initialState;
    default:
      return state;
  }
};
