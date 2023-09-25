import { CharacterImage } from "./CharacterImage.tsx";
import { useSelector } from "react-redux";
import {
  charactersSelector,
  errorSelector,
  loadingSelector,
} from "../redux/characters/selectors.ts";
import { counterValueSelector } from "../redux/counter/selectors.ts";

export const CharacterImages = () => {
  const characters = useSelector(charactersSelector);
  const loading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);
  const counter = useSelector(counterValueSelector);

  return (
    <div className={"characterImagesContainer"}>
      {counter > 0 &&
        Array.from(Array(counter).keys()).map((character, i) => {
          return (
            <CharacterImage
              key={character}
              loading={loading[i]}
              error={error[i]}
              character={characters[i]}
              index={i}
            />
          );
        })}
    </div>
  );
};
