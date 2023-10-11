import { QueryFunctionContext, useQuery } from "@tanstack/react-query";

const fetchCharacter = async (context: QueryFunctionContext) => {
  const [, index] = context.queryKey as [string, number];

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
    // cacheTime: 0,
  });
