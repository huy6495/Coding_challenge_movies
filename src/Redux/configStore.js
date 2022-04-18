import { applyMiddleware, combineReducers, createStore } from "redux";
import reduxThunk from "redux-thunk";
import { MovieReducer } from "./Reducers/MovieReducer";
import { UserReducer } from "./Reducers/UserReducer";

const rootReducer = combineReducers({
  //Reducers put here
  MovieReducer,
  UserReducer,
});

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));
