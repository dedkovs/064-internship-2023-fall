import { createStore } from "redux";
import { reducer } from "../00-common/reducer-function.js";

const store = createStore(reducer);

console.log(store.getState());

store.dispatch({ type: "INC" });
console.log(store.getState());

store.dispatch({ type: "INC" });
console.log(store.getState());

store.dispatch({ type: "DEC" });
console.log(store.getState());

store.dispatch({ type: "UNKNOWN" });
console.log(store.getState());
