import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
import cartSlice from "./cart/cartSlice";

const combineReducer = combineReducers({
  cart: cartSlice,
  user: userSlice,
});

export default configureStore({
  reducer: {
    user: userSlice,
    cart: cartSlice,
  },
});
