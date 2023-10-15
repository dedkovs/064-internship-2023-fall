import { CharacterImage } from "./CharacterImage.tsx";
import { useSelector } from "react-redux";
import { counterValueSelector } from "../../redux/counter/selectors.ts";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";

export const CharacterImages = () => {
  const queryClient = useQueryClient();
  const counter = useSelector(counterValueSelector);

  useEffect(() => {
    counter > 0 &&
      Array.from(Array(counter).keys()).map((index) => {
        queryClient.invalidateQueries({
          queryKey: ["character", { index }],
        });
      });
  }, [counter]);

  return (
    <div className={"characterImagesContainer"}>
      {counter > 0 &&
        Array.from(Array(counter).keys()).map((i) => {
          return <CharacterImage key={i} index={i} />;
        })}
    </div>
  );
};
