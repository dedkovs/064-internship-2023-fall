import { Component } from "react";
import { connect } from "react-redux";
import { counterChangeColor } from "../../redux/counter/reducer.ts";
import { AppState } from "../../redux/store.ts";
import { CounterColor } from "../../redux/counter/types.ts";
import { ThemeState } from "../../redux/theme/types.ts";
import { COLORS } from "../../constants/colors.ts";

type Props = {
  color: CounterColor;
  theme: ThemeState;
  counterColor: CounterColor;
  changeColor: (color: CounterColor) => void;
};

class RadioButton extends Component<Props> {
  render() {
    const { color, theme, counterColor, changeColor } = this.props;

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
          onChange={() => changeColor(color)}
        />
        {color}
      </label>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    counterColor: state.counter.color,
    theme: state.theme,
  };
};

const mapDispatchToProps = {
  changeColor: counterChangeColor,
};

export default connect(mapStateToProps, mapDispatchToProps)(RadioButton);
