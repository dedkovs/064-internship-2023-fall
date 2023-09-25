import { toggleTheme } from "../redux/theme/reducer.ts";
import { useDispatch } from "react-redux";

export const ChangeThemeButton = () => {
  const dispatch = useDispatch();

  return <button onClick={() => dispatch(toggleTheme())}>Toggle theme</button>;
};
