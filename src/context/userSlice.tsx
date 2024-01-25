import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import Constants from '../utils/Constants';
import {getItem} from '../utils/Utils';

interface UserState {
  isLoggedIn: boolean;
}
const initialState: UserState = {
  isLoggedIn: false,
};
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLogin(state, action) {
      state.isLoggedIn = action.payload;
    },
  },
});

export const {userLogin} = userSlice.actions;
export default userSlice.reducer;
