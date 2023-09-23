import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { themeSelector } from "../redux/theme/selectors.ts";
import { ThemeModes } from "../redux/theme/types.ts";
import { COLORS } from "../constants/colors.ts";

export const Background = ({ children }: { children: ReactNode }) => {
  const theme = useSelector(themeSelector);

  return (
    <div
      className={"background"}
      style={{
        backgroundColor:
          theme === ThemeModes.Light ? COLORS.white : COLORS.black,
      }}
    >
      {children}
    </div>
  );
};
