import { ChangeThemeButton } from "./ChangeThemeButton.tsx";
import { FetchCharactersButton } from "./FetchCharactersButton.tsx";

type Props = {
    fetchCharacters: () => void;
};

export const ActionButtons = ({ fetchCharacters }: Props) => {
    return (
        <div className={"buttonsContainer"}>
            <ChangeThemeButton />
            <FetchCharactersButton fetchCharacters={fetchCharacters}/>
        </div>
    );
};