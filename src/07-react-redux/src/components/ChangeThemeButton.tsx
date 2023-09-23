import { toggleTheme } from "../redux/theme/actions.ts";
import { useDispatch } from "react-redux";

export const ChangeThemeButton = () => {
  const dispatch = useDispatch();

  return <button onClick={() => dispatch(toggleTheme())}>Toggle theme</button>;
};
