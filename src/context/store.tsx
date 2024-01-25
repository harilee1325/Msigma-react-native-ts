import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../context/userSlice';

export const store = configureStore({
  reducer: {
    userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
