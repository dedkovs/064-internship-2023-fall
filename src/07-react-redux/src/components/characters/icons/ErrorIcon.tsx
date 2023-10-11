import { ThemeState } from "../../../redux/theme/types.ts";
import { COLORS } from "../../../constants/colors.ts";
import { useSelector } from "react-redux";
import { themeSelector } from "../../../redux/theme/selectors.ts";

type Props = {
  isError: boolean;
};

export const ErrorIcon = ({ isError }: Props) => {
  const theme = useSelector(themeSelector);

  return (
    <svg
      width="80px"
      height="80px"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill={
        theme === ThemeState.Dark
          ? COLORS.white_transparent_30
          : COLORS.white_transparent_80
      }
      className={"errorIcon"}
      style={{ visibility: isError ? "visible" : "hidden" }}
    >
      <path d="M8.6 1c1.6.1 3.1.9 4.2 2 1.3 1.4 2 3.1 2 5.1 0 1.6-.6 3.1-1.6 4.4-1 1.2-2.4 2.1-4 2.4-1.6.3-3.2.1-4.6-.7-1.4-.8-2.5-2-3.1-3.5C.9 9.2.8 7.5 1.3 6c.5-1.6 1.4-2.9 2.8-3.8C5.4 1.3 7 .9 8.6 1zm.5 12.9c1.3-.3 2.5-1 3.4-2.1.8-1.1 1.3-2.4 1.2-3.8 0-1.6-.6-3.2-1.7-4.3-1-1-2.2-1.6-3.6-1.7-1.3-.1-2.7.2-3.8 1-1.1.8-1.9 1.9-2.3 3.3-.4 1.3-.4 2.7.2 4 .6 1.3 1.5 2.3 2.7 3 1.2.7 2.6.9 3.9.6zM7.9 7.5L10.3 5l.7.7-2.4 2.5 2.4 2.5-.7.7-2.4-2.5-2.4 2.5-.7-.7 2.4-2.5-2.4-2.5.7-.7 2.4 2.5z" />
    </svg>
  );
};
