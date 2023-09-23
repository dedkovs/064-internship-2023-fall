import { useSelector } from "react-redux";
import { themeSelector } from "../redux/theme/selectors.ts";
import { ThemeModes } from "../redux/theme/types.ts";
import { Dispatch, SetStateAction } from "react";
import { COLORS } from "../constants/colors.ts";

type Props = {
  character: string;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<{ [p: number]: boolean }>>;
  index: number;
};

export const CharacterImage = ({
  character,
  loading,
  setLoading,
  index,
}: Props) => {
  const theme = useSelector(themeSelector);

  return (
    <div
      className={"characterImageContainer"}
      style={{
        backgroundColor:
          theme === ThemeModes.Light ? COLORS.lightGrey : COLORS.darkGrey,
      }}
    >
      <div
        style={{ visibility: !loading ? "hidden" : "visible" }}
        className={"spinner"}
      />
      <img
        style={{ visibility: loading ? "hidden" : "visible" }}
        src={character}
        onLoad={() => setLoading((l) => ({ ...l, [index]: false }))}
        width={100}
        height={100}
        alt={""}
      />
    </div>
  );
};
