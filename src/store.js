import { createStore, combineReducers } from "redux";
import { counterReducer } from "./counterreduce";
import { panierReducer } from "./panierreducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  panier: panierReducer,
});

export const store = createStore(rootReducer);
