import { MutableRefObject } from "react";

type Props = {
  inputRef: MutableRefObject<HTMLInputElement | null>;
};

export const MessageInput = ({ inputRef }: Props) => {
  return <input maxLength={20} ref={inputRef} />;
};
