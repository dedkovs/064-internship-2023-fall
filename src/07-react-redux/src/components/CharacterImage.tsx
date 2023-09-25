import { useDispatch, useSelector } from "react-redux";
import { themeSelector } from "../redux/theme/selectors.ts";
import { ThemeModes } from "../redux/theme/types.ts";
import { COLORS } from "../constants/colors.ts";
import { setLoading } from "../redux/characters/actions.ts";

type Props = {
  character: string;
  loading: boolean;
  index: number;
};

export const CharacterImage = ({ character, loading, index }: Props) => {
  const theme = useSelector(themeSelector);

  const dispatch = useDispatch();

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
        onLoad={() => dispatch(setLoading({ index, value: false }))}
        width={100}
        height={100}
        alt={""}
      />
    </div>
  );
};
