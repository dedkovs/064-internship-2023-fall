export const initialCharacters = (numberOfCharacters: number) => {
  const imageSrc = {} as { [key: number]: string };
  const loading = {} as { [key: number]: boolean };
  for (let i = 0; i < numberOfCharacters; i++) {
    imageSrc[i] = "";
    loading[i] = false;
  }
  return { imageSrc, loading };
};
