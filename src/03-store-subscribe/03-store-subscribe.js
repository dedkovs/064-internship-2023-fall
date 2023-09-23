import { createStore } from "redux";
import { reducer } from "../00-common/reducer-function.js";

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ type: "INC" });

store.dispatch({ type: "INC" });

store.dispatch({ type: "DEC" });

store.dispatch({ type: "UNKNOWN" });
