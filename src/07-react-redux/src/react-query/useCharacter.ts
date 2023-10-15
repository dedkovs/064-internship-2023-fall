import { QueryFunctionContext, useQuery } from "@tanstack/react-query";

type QueryKey = [string, { index: number }];
type Character = { index: number; imgSrc: Blob };

const fetchCharacter = async (
  context: QueryFunctionContext<QueryKey>,
): Promise<Character> => {
  const { index } = context.queryKey[1];

  return await fetch(
    `https://rickandmortyapi.com/api/character/${Math.floor(
      Math.random() * 826 + 1,
    )}`,
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error();
      }
      return res.json();
    })
    .then(async (data) => {
      return await fetch(data.image)
        .then((res) => res.blob())
        .then((blob) => {
          return { index, imgSrc: blob };
        });
    });
};

export const useCharacter = (index: number) =>
  useQuery({
    queryKey: ["character", { index }],
    queryFn: fetchCharacter,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    retry: 0,
  });
