import { applyMiddleware, combineReducers, createStore } from "redux";
import reduxThunk from "redux-thunk";
import { ProductReducer } from "./Reducers/ProductReducer";
import { UserReducer } from "./Reducers/UserReducer";

const rootReducer = combineReducers({
  //Reducers put here
  ProductReducer,
  UserReducer,
});

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));
