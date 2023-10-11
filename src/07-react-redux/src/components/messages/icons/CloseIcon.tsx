type Props = {
  fill: string;
};

export const CloseIcon = ({ fill }: Props) => {
  return (
    <svg
      className={"icon deleteIcon"}
      width={"21px"}
      height={"21px"}
      viewBox={"3 3 18 18"}
    >
      <path
        fill={fill}
        d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
      ></path>
    </svg>
  );
};
