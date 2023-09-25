import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer as charactersReducer } from "./characters/reducer.ts";
import { reducer as counterReducer } from "./counter/reducer.ts";
import { reducer as themeReducer } from "./theme/reducer.ts";
import { CounterState } from "./counter/types.ts";
import { ThemeState } from "./theme/types.ts";
import { CharactersState } from "./characters/types.ts";

const rootReducer = combineReducers({
  characters: charactersReducer,
  counter: counterReducer,
  theme: themeReducer,
});

export type AppState = {
  characters: CharactersState;
  counter: CounterState;
  theme: ThemeState;
};

export const store = createStore(rootReducer, applyMiddleware(thunk));
