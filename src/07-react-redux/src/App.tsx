import { Background } from "./components/Background.tsx";
import { Counter } from "./components/Counter.tsx";
import { RadioButtons } from "./components/RadioButtons.tsx";
import { IncrementButtons } from "./components/IncrementButtons.tsx";
import { ChangeThemeButton } from "./components/ChangeThemeButton.tsx";
import { FetchCharactersButton } from "./components/FetchCharactersButton.tsx";
import { useCallback, useEffect, useState } from "react";
import { CharacterImages } from "./components/CharacterImages.tsx";
import { fetchCharacters } from "./utilities/fetchCharacters.ts";

function App() {
  const [characters, setCharacters] = useState({});

  const [loading, setLoading] = useState({});

  const [error, setError] = useState({});

  const fetch = useCallback(
    () =>
      fetchCharacters({
        setCharacters,
        setLoading,
        setError,
      }),
    [fetchCharacters, setCharacters, setLoading, setError],
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
        error={error}
        setError={setError}
      />
      <FetchCharactersButton fetchCharacters={fetch} />
    </Background>
  );
}

export default App;
