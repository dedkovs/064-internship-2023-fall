import { createStore } from "redux";
import { reducer } from "../00-common/reducer-function-with-payload.js";

const store = createStore(reducer);

document.getElementById("INC").addEventListener("click", () => {
  store.dispatch({ type: "INC" });
});

document.getElementById("DEC").addEventListener("click", () => {
  store.dispatch({ type: "DEC" });
});

document.getElementById("INC_10").addEventListener("click", () => {
  store.dispatch({ type: "INC_10", payload: 10 });
});

document.getElementById("DEC_10").addEventListener("click", () => {
  store.dispatch({ type: "DEC_10", payload: 10 });
});

const update = () => {
  document.getElementById("counter").innerHTML = store.getState().counter;
};

store.subscribe(update);
