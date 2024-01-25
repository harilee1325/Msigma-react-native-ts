import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import Constants from '../utils/Constants';
import {getItem} from '../utils/Utils';

interface UserDataState {
  name: string;
  token: string;
  college: string;
  sem: string;
}
const initialState: UserDataState = {
  name: '',
  token: '',
  college: '',
  sem: '',  
};
export const userDataSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userData(state, action) {
      state.name = action.payload[1];
      state.token = action.payload[2];
      state.college = action.payload[3];
      state.sem = action.payload[4];
    },
  },
});

export const {userData} = userDataSlice.actions;
export default userDataSlice.reducer;
