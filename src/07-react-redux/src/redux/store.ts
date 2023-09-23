import { combineReducers, createStore } from "redux";
import { reducer as counterReducer } from "./counter/reducer.ts";
import { reducer as themeReducer } from "./theme/reducer.ts";
import { CounterState } from "./counter/types.ts";
import { ThemeState } from "./theme/types.ts";

const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
});

export type AppState = {
  counter: CounterState;
  theme: ThemeState;
};

export const store = createStore(rootReducer);
