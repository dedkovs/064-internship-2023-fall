import { reducer } from "../00-common/reducer-function.js";

let state = reducer(undefined, {}); // initialize state
console.log(state);

state = reducer(state, { type: "INC" }); // increase number
console.log(state);

state = reducer(state, { type: "INC" }); // increase number
console.log(state);

state = reducer(state, { type: "DEC" }); // decrease number
console.log(state);

state = reducer(state, { type: "UNKNOWN" }); // return unchanged state
console.log(state);
