import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import Constants from '../utils/Constants';
import {getItem} from '../utils/Utils';

interface UserDataState {
  name: string;
  token: string;
  id: string;
  sem: string;
}
const initialState: UserDataState = {
  name: '',
  token: '',
  id: '',
  sem: '',
};
export const userDataSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userData(state, action) {
      state.name = action.payload[0];
      state.token = action.payload[1];
      state.id = action.payload[2];
      state.sem = action.payload[3];
    },
  },
});

export const {userData} = userDataSlice.actions;
export default userDataSlice.reducer;
