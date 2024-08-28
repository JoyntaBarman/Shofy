import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action ) => {
      state.cart = action.payload
    }
  }

})

export default cartSlice.reducer;
export const {addToCart} = cartSlice.actions;