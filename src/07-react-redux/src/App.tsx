import { Background } from "./components/Background.tsx";
import { Counter } from "./components/characters/Counter.tsx";
import { RadioButtons } from "./components/characters/RadioButtons.tsx";
import { IncrementButtons } from "./components/characters/IncrementButtons.tsx";
import { CharacterImages } from "./components/characters/CharacterImages.tsx";
import { ActionButtons } from "./components/characters/ActionButtons.tsx";
import { Messages } from "./components/messages/Messages.tsx";

function App() {
  return (
    <Background>
      <Counter />
      <RadioButtons />
      <IncrementButtons />
      <ActionButtons />
      <CharacterImages />
      <Messages />
    </Background>
  );
}

export default App;
