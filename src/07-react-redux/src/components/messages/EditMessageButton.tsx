import { EditIcon } from "./icons/EditIcon.tsx";
import { useSelector } from "react-redux";
import { themeSelector } from "../../redux/theme/selectors.ts";
import { ThemeState } from "../../redux/theme/types.ts";
import { COLORS } from "../../constants/colors.ts";
import { DoneIcon } from "./icons/DoneIcon.tsx";

type Props = {
  onEditMessage: () => void;
  editingMode: boolean;
};

export const EditMessageButton = ({ onEditMessage, editingMode }: Props) => {
  const theme = useSelector(themeSelector);
  const fill = theme === ThemeState.Dark ? COLORS.lightGrey : COLORS.darkGrey;

  return (
    <div onClick={onEditMessage}>
      {editingMode ? <DoneIcon fill={fill} /> : <EditIcon fill={fill} />}
    </div>
  );
};
