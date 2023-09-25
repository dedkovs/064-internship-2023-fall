import { useDispatch, useSelector } from "react-redux";
import { thunkFetchCharacters } from "../redux/characters/actions.ts";
import { FetchCharactersThunkDispatch } from "../redux/characters/types.ts";
import { counterValueSelector } from "../redux/counter/selectors.ts";

export const FetchCharactersButton = () => {
  const dispatch = useDispatch<FetchCharactersThunkDispatch>();
  const counter = useSelector(counterValueSelector);

  return (
    <button onClick={() => dispatch(thunkFetchCharacters(counter))}>
      Fetch characters
    </button>
  );
};
