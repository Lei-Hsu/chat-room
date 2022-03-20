import commonSlice from '@Redux/slices/commonSlice';
import counterReducer from '@Redux/slices/counterSlice';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  counter: counterReducer,
  common: commonSlice,
});