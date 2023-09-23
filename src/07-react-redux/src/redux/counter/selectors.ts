import { AppState } from "../store.ts";

export const counterValueSelector = (state: AppState) => state.counter.value;
export const counterColorSelector = (state: AppState) => state.counter.color;
