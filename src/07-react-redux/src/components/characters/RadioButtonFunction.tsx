import { ThemeState } from "../../redux/theme/types.ts";
import { COLORS } from "../../constants/colors.ts";
import { useDispatch, useSelector } from "react-redux";
import { CounterColor } from "../../redux/counter/types.ts";
import { counterChangeColor } from "../../redux/counter/reducer.ts";
import { counterColorSelector } from "../../redux/counter/selectors.ts";
import { themeSelector } from "../../redux/theme/selectors.ts";

type Props = {
  color: CounterColor;
};

export const RadioButtonFunction = ({ color }: Props) => {
  const counterColor = useSelector(counterColorSelector);
  const theme = useSelector(themeSelector);
  const dispatch = useDispatch();

  return (
    <label
      style={{
        color: theme === ThemeState.Light ? COLORS.black : COLORS.white,
      }}
    >
      <input
        style={{ accentColor: color }}
        type={"radio"}
        value={color}
        checked={counterColor === color}
        onChange={() => dispatch(counterChangeColor(color))}
      />
      {color}
    </label>
  );
};
