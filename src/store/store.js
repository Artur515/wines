import { configureStore } from '@reduxjs/toolkit';
import winesReducer from './winesSlice';

const store = configureStore({
  reducer: {
    wines: winesReducer,
  },
});

export default store;
