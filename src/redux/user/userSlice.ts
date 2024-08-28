import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  userInfo: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    removeUser: (state, action) => {
      state.userInfo = null;
    }
  }
});

export default userSlice.reducer;
export const {addUser, removeUser} = userSlice.actions;
