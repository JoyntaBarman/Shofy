import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productType } from "../../../type";
import toast from "react-hot-toast";

interface InitialState {
  cart: productType[]
}

const initialState : InitialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<productType>) => {
      const existingProductIndex: number = state.cart.findIndex((obj: productType, index) => obj?.id === action.payload?.id);

      if(existingProductIndex < 0){
        state.cart.push(action?.payload);
        toast('Cart added!');
      }else {
        state.cart[existingProductIndex].quantity += 1
        toast('Increase product quantity!')
      }
    },
    increaseQuantity: (state, action) => {
      const existingProductIndex = state.cart.findIndex(obj => obj?.id === action.payload?.id);
      const quantity : number = state.cart[existingProductIndex].quantity!;
      if(quantity < 100) {
        state.cart[existingProductIndex].quantity += 1
      } else {
        toast('You can not add more then 100!')
      }
    },
    decreaseQuantity: (state, action) => {
      const existingProductIndex = state.cart.findIndex(obj => obj?.id === action.payload?.id);
      const quantity : number = state.cart[existingProductIndex].quantity!;
      if(quantity > 1) {
        state.cart[existingProductIndex].quantity -= 1
      } else {
        toast('You can not less more then 1!')
      }
    }
  },
});

export default cartSlice.reducer;
export const { addToCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;

// const initialState = {
//   user: null
// }
// export default function User(state = initialState, action){
//   console.log('User action', action);
// }
