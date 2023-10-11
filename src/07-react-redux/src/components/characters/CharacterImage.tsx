import { useSelector } from "react-redux";
import { themeSelector } from "../../redux/theme/selectors.ts";
import { ThemeState } from "../../redux/theme/types.ts";
import { COLORS } from "../../constants/colors.ts";
import { useCharacter } from "../../react-query/useCharacter.ts";
import { ErrorIcon } from "./icons/ErrorIcon.tsx";

type Props = {
  index: number;
};

export const CharacterImage = ({ index }: Props) => {
  const character = useCharacter(index);
  const { isLoading, isFetching, isSuccess, isError, data } = character;
  const theme = useSelector(themeSelector);

  return (
    <div
      className={"characterImageContainer"}
      style={{
        backgroundColor:
          theme === ThemeState.Light ? COLORS.lightGrey : COLORS.darkGrey,
      }}
    >
      <ErrorIcon isError={isError} />
      <div
        style={{ visibility: isLoading || isFetching ? "visible" : "hidden" }}
        className={"spinner"}
      />
      <img
        style={{
          visibility:
            !isLoading && !isFetching && !isError ? "visible" : "hidden",
        }}
        src={isSuccess ? URL.createObjectURL(data.imgSrc) : ""}
        width={100}
        height={100}
        alt={""}
      />
    </div>
  );
};
