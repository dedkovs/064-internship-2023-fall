import { createStore } from "redux";
import { reducer } from "../00-common/reducer-function-with-payload-refactored.js";
import { inc, dec } from "./actions.js";

const store = createStore(reducer);

document.getElementById("INC").addEventListener("click", () => {
  store.dispatch(inc(1));
});

document.getElementById("DEC").addEventListener("click", () => {
  store.dispatch(dec(1));
});

document.getElementById("INC_10").addEventListener("click", () => {
  store.dispatch(inc(10));
});

document.getElementById("DEC_10").addEventListener("click", () => {
  store.dispatch(dec(10));
});

const update = () => {
  document.getElementById("counter").innerHTML = store.getState().counter;
};

store.subscribe(update);
