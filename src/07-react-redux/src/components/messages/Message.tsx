import { useSelector } from "react-redux";
import { themeSelector } from "../../redux/theme/selectors.ts";
import { ThemeState } from "../../redux/theme/types.ts";
import { COLORS } from "../../constants/colors.ts";
import { DeleteMessageButton } from "./DeleteMessageButton.tsx";
import { EditMessageButton } from "./EditMessageButton.tsx";
import { useEffect, useRef, useState } from "react";
import { useMutationEditMessage } from "../../react-query/useMutationEditMessage.ts";
import { useIsMutating } from "@tanstack/react-query";
import { useMutationDeleteMessage } from "../../react-query/useMutationDeleteMessage.ts";

type Props = {
  message: string;
  id: number;
};

export const Message = ({ message, id }: Props) => {
  const theme = useSelector(themeSelector);

  const editingInputRef = useRef<HTMLInputElement | null>(null);

  const [editingMode, setEditingMode] = useState(false);

  const { mutateAsync: editMessage } = useMutationEditMessage(id);
  const { mutateAsync: deleteMessage } = useMutationDeleteMessage(id);

  const isEditingMessage = useIsMutating({
    mutationKey: ["editMessage", { id }],
  });

  const isDeletingMessage = useIsMutating({
    mutationKey: ["deleteMessage", { id }],
  });

  useEffect(() => {
    editingInputRef.current?.focus();
  }, [editingMode]);

  const onEditMessage = async () => {
    if (editingMode) {
      setEditingMode(false);
      if (
        editingInputRef.current &&
        editingInputRef.current?.value.trim() !== "" &&
        message !== editingInputRef.current.value
      ) {
        await editMessage({ id, message: editingInputRef.current?.value });
      }
    } else {
      setEditingMode(true);
    }
  };

  const onDeleteMessage = async () => {
    if (editingMode) {
      setEditingMode(false);
    }
    await deleteMessage(id);
  };

  const getBackgroundColor = () => {
    if (theme === ThemeState.Dark) {
      if (isDeletingMessage > 0) {
        return COLORS.darkPink;
      }
      if (isEditingMessage > 0) {
        return COLORS.darkGreen;
      }
      return COLORS.darkGrey;
    }
    if (theme === ThemeState.Light) {
      if (isDeletingMessage > 0) {
        return COLORS.lightPink;
      }
      if (isEditingMessage > 0) {
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

      {isEditingMessage > 0
        ? "Updating message..."
        : isDeletingMessage > 0
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
