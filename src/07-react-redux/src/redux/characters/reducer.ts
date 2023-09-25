import {
  actionTypes,
  CharactersAction,
  CharactersState,
  SetCharacterPayload,
  SetLoadingPayload,
} from "./types.ts";

const initialState: CharactersState = {
  characters: {},
  loading: {},
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
