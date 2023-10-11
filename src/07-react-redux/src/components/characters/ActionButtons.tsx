import { ChangeThemeButton } from "./ChangeThemeButton.tsx";
import { FetchCharactersButton } from "./FetchCharactersButton.tsx";

export const ActionButtons = () => {
  return (
    <div className={"buttonsContainer"}>
      <ChangeThemeButton />
      <FetchCharactersButton />
    </div>
  );
};
