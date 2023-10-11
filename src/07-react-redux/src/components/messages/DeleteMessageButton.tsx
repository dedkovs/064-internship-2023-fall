import { CloseIcon } from "./icons/CloseIcon.tsx";
import { useSelector } from "react-redux";
import { themeSelector } from "../../redux/theme/selectors.ts";
import { ThemeState } from "../../redux/theme/types.ts";
import { COLORS } from "../../constants/colors.ts";

type Props = {
  onDeleteMessage: () => void;
};

export const DeleteMessageButton = ({ onDeleteMessage }: Props) => {
  const theme = useSelector(themeSelector);

  return (
    <div onClick={onDeleteMessage}>
      <CloseIcon
        fill={theme === ThemeState.Dark ? COLORS.lightGrey : COLORS.darkGrey}
      />
    </div>
  );
};
