import { CharacterImage } from "./CharacterImage.tsx";
import { Dispatch, SetStateAction } from "react";

type Props = {
  characters: { [p: number]: string };
  loading: { [p: number]: boolean };
  setLoading: Dispatch<SetStateAction<{ [p: number]: boolean }>>;
};

export const CharacterImages = ({ characters, loading, setLoading }: Props) => {
  return (
    <div className={"characterImagesContainer"}>
      {Object.keys(characters).map((character, i) => {
        return (
          <CharacterImage
            key={character}
            loading={loading[i]}
            character={characters[i]}
            setLoading={setLoading}
            index={i}
          />
        );
      })}
    </div>
  );
};
