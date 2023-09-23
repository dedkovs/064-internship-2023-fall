import React from "react";

type Params = {
  characters: { [p: number]: string };
  setCharacters: React.Dispatch<React.SetStateAction<{ [p: number]: string }>>;
  setLoading: React.Dispatch<React.SetStateAction<{ [p: number]: boolean }>>;
};

export const fetchCharacters = ({
  characters,
  setCharacters,
  setLoading,
}: Params) => {
  Object.keys(characters).map(async (_el, i) => {
    setLoading((l) => ({ ...l, [i]: true }));
    await fetch(
      `https://rickandmortyapi.com/api/character/${
        Math.floor(Math.random() * 824) + 1
      }`,
    )
      .then((res) => res.json())
      .then((data) => {
        setCharacters((c) => ({ ...c, [i]: data.image }));
      });
  });
};
