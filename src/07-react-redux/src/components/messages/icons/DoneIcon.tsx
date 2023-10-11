type Props = {
  fill: string;
};

export const DoneIcon = ({ fill }: Props) => {
  return (
    <svg
      className={"icon doneIcon"}
      width={"21px"}
      height={"21px"}
      viewBox={"3 3 18 18"}
    >
      <path
        fill={fill}
        d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
      ></path>
    </svg>
  );
};
