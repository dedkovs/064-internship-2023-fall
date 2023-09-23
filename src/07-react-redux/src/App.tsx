import { Background } from "./components/Background.tsx";
import { Counter } from "./components/Counter.tsx";
import { RadioButtons } from "./components/RadioButtons.tsx";
import { IncrementButtons } from "./components/IncrementButtons.tsx";
import { ChangeThemeButton } from "./components/ChangeThemeButton.tsx";
import { FetchCharactersButton } from "./components/FetchCharactersButton.tsx";
import { useCallback, useEffect, useState } from "react";
import { CharacterImages } from "./components/CharacterImages.tsx";
import { initialCharacters } from "./utilities/initialCharacters.ts";
import { fetchCharacters } from "./utilities/fetchCharacters.ts";

const NUMBER_OF_CHARACTERS = 9;

function App() {
  const [characters, setCharacters] = useState(
    initialCharacters(NUMBER_OF_CHARACTERS).imageSrc,
  );

  const [loading, setLoading] = useState(
    initialCharacters(NUMBER_OF_CHARACTERS).loading,
  );

  const fetch = useCallback(
    () =>
      fetchCharacters({
        characters,
        setCharacters,
        setLoading,
      }),
    [characters, setCharacters, setLoading],
  );

  let firstRender = true;

  useEffect(() => {
    if (firstRender) {
      fetch();
      firstRender = false;
    }
  }, []);

  return (
    <Background>
      <Counter />
      <RadioButtons />
      <IncrementButtons />
      <ChangeThemeButton />
      <CharacterImages
        characters={characters}
        loading={loading}
        setLoading={setLoading}
      />
      <FetchCharactersButton fetchCharacters={fetch} />
    </Background>
  );
}

export default App;
