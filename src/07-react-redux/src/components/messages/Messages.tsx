import { useMessages } from "../../react-query/useMessages.ts";
import { Message } from "./Message.tsx";
import { MessageInput } from "./MessageInput.tsx";
import { ThemeState } from "../../redux/theme/types.ts";
import { COLORS } from "../../constants/colors.ts";
import { useSelector } from "react-redux";
import { themeSelector } from "../../redux/theme/selectors.ts";
import { useEffect, useRef, useState } from "react";
import { useIsMutating } from "@tanstack/react-query";
import { useMutationPostMessage } from "../../react-query/useMutationPostMessage.ts";

export const Messages = () => {
  const [statusMessage, setStatusMessage] = useState("");

  const inputRef = useRef<HTMLInputElement | null>(null);

  const theme = useSelector(themeSelector);

  const {
    data: messages,
    isFetching,
    isLoading,
    isError: isLoadingMessagesError,
    isStale,
  } = useMessages();

  const { mutate: postMessage, isLoading: isPostingMessage } =
    useMutationPostMessage();

  const isDeletingMessage = useIsMutating({
    mutationKey: ["deleteMessage"],
  });

  useEffect(() => {
    if (isStale) {
      setStatusMessage("");
    }
    if (isFetching || isLoading) {
      setStatusMessage("Loading messages...");
    }
    if (isDeletingMessage > 0) {
      setStatusMessage("Deleting message...");
    }
    if (isPostingMessage) {
      setStatusMessage("Posting message...");
    }
    if (isLoadingMessagesError) {
      setStatusMessage("Something went wrong, please try later");
    }
  }, [
    isStale,
    isFetching,
    isLoading,
    isDeletingMessage,
    isPostingMessage,
    isLoadingMessagesError,
  ]);

  const sendMessageHandler = () => {
    if (inputRef.current?.value.trim() === "") {
      setStatusMessage("Please write something");
    } else {
      setStatusMessage("");
      postMessage(inputRef.current?.value!);
    }
  };

  return (
    <>
      <div className={"messagesInputContainer"}>
        <MessageInput inputRef={inputRef} />
        <button onClick={sendMessageHandler}>Send the message</button>
      </div>

      <div
        className={"messagesStatusContainer"}
        style={{
          color: `${theme === ThemeState.Dark ? COLORS.white : COLORS.black}`,
        }}
      >
        {statusMessage}
      </div>

      <div className={"messagesContainer"}>
        {messages
          ?.sort((a, b) => b.id - a.id)
          .map((message) => (
            <Message
              key={message.id}
              id={message.id}
              message={message.message}
            />
          ))}
      </div>
    </>
  );
};
