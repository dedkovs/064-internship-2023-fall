import { createStore } from "redux";
import { reducer } from "../00-common/reducer-function.js";

const store = createStore(reducer);

document.getElementById("INC").addEventListener("click", () => {
  store.dispatch({ type: "INC" });
});

document.getElementById("DEC").addEventListener("click", () => {
  store.dispatch({ type: "DEC" });
});

const update = () => {
  document.getElementById("counter").innerHTML = store.getState().counter;
};

store.subscribe(update);
