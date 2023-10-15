import { useSelector } from "react-redux";
import { themeSelector } from "../../redux/theme/selectors.ts";
import { ThemeState } from "../../redux/theme/types.ts";
import { COLORS } from "../../constants/colors.ts";
import { DeleteMessageButton } from "./DeleteMessageButton.tsx";
import { EditMessageButton } from "./EditMessageButton.tsx";
import { useEffect, useRef, useState } from "react";
import { useMutationEditMessage } from "../../react-query/useMutationEditMessage.ts";
import { useMutationDeleteMessage } from "../../react-query/useMutationDeleteMessage.ts";

type Props = {
  message: string;
  id: number;
};

export const Message = ({ message, id }: Props) => {
  const theme = useSelector(themeSelector);

  const editingInputRef = useRef<HTMLInputElement | null>(null);

  const [editingMode, setEditingMode] = useState(false);

  const { mutate: editMessage, isLoading: isEditingMessage } =
    useMutationEditMessage(id);

  const { mutate: deleteMessage, isLoading: isDeletingMessage } =
    useMutationDeleteMessage(id);

  useEffect(() => {
    editingInputRef.current?.focus();
  }, [editingMode]);

  const onEditMessage = () => {
    if (editingMode) {
      setEditingMode(false);
      if (
        editingInputRef.current &&
        editingInputRef.current?.value.trim() !== "" &&
        message !== editingInputRef.current.value
      ) {
        editMessage({ id, message: editingInputRef.current?.value });
      }
    } else {
      setEditingMode(true);
    }
  };

  const onDeleteMessage = () => {
    if (editingMode) {
      setEditingMode(false);
    }
    deleteMessage(id);
  };

  const getBackgroundColor = () => {
    if (theme === ThemeState.Dark) {
      if (isDeletingMessage) {
        return COLORS.darkPink;
      }
      if (isEditingMessage) {
        return COLORS.darkGreen;
      }
      return COLORS.darkGrey;
    }
    if (theme === ThemeState.Light) {
      if (isDeletingMessage) {
        return COLORS.lightPink;
      }
      if (isEditingMessage) {
        return COLORS.lightGreen;
      }
      return COLORS.lightGrey;
    }
  };

  return (
    <div
      className={"messageContainer"}
      style={{
        color: `${theme === ThemeState.Dark ? COLORS.white : COLORS.black}`,
        backgroundColor: getBackgroundColor(),
      }}
    >
      <EditMessageButton
        editingMode={editingMode}
        onEditMessage={onEditMessage}
      />

      <DeleteMessageButton onDeleteMessage={onDeleteMessage} />

      {isEditingMessage
        ? "Updating message..."
        : isDeletingMessage
        ? "Deleting message..."
        : message}

      {editingMode && (
        <input
          placeholder={"Write something"}
          ref={editingInputRef}
          maxLength={20}
          defaultValue={message}
          className={"editMessage"}
        />
      )}
    </div>
  );
};
