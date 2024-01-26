import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../context/userSlice';
import userDataReducer from '../context/userDataSlice';

export const store = configureStore({
  reducer: {
    userReducer,
    userDataReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
