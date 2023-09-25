import { Background } from "./components/Background.tsx";
import { Counter } from "./components/Counter.tsx";
import { RadioButtons } from "./components/RadioButtons.tsx";
import { IncrementButtons } from "./components/IncrementButtons.tsx";
import { CharacterImages } from "./components/CharacterImages.tsx";
import { ActionButtons } from "./components/ActionButtons.tsx";

function App() {
  return (
    <Background>
      <Counter />
      <RadioButtons />
      <IncrementButtons />
      <ActionButtons />
      <CharacterImages />
    </Background>
  );
}

export default App;
