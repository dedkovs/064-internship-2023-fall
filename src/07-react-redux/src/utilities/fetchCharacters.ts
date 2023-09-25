import React from "react";
import { NUMBER_OF_CHARACTERS } from "../constants/numberOfCharacters.ts";

type Params = {
  setCharacters: React.Dispatch<React.SetStateAction<{ [p: number]: string }>>;
  setLoading: React.Dispatch<React.SetStateAction<{ [p: number]: boolean }>>;
  setError: React.Dispatch<React.SetStateAction<{ [p: number]: boolean }>>;
};

export const fetchCharacters = ({
  setCharacters,
  setLoading,
  setError,
}: Params) => {
  Array.from(Array(NUMBER_OF_CHARACTERS).keys()).map(async (i) => {
    setLoading((l) => ({ ...l, [i]: true }));
    setError((e) => ({ ...e, [i]: false }));
    await fetch(
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
      .then((data) => {
        setCharacters((c) => ({ ...c, [i]: data.image }));
      })
      .catch(() => {
        setLoading((l) => ({ ...l, [i]: false }));
        setError((e) => ({ ...e, [i]: true }));
      });
  });
};
