import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "@Redux/slices/counterSlice";

export const rootReducer = combineReducers({
  counter: counterReducer,
});