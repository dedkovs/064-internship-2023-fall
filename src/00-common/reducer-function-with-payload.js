const initialState = {
  counter: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INC":
      return { ...state, counter: state.counter + 1 };
    case "DEC":
      return { ...state, counter: state.counter - 1 };
    case "INC_10":
      return { ...state, counter: state.counter + action.payload };
    case "DEC_10":
      return { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
};
