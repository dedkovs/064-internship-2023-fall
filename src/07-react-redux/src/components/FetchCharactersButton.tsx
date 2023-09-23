type Props = {
  fetchCharacters: () => void;
};

export const FetchCharactersButton = ({ fetchCharacters }: Props) => {
  return <button onClick={fetchCharacters}>Fetch characters</button>;
};
