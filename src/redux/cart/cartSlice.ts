import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productType } from "../../../type";
import toast from "react-hot-toast";

interface InitialState {
  cart: productType[];
}

const initialState: InitialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<productType>) => {
      const existingProduct = state.cart.find(
        (obj: productType, index) => obj?.id === action.payload?.id
      );

      if (!existingProduct) {
        state.cart.push({ ...action?.payload, quantity: 1 });

        toast.success("Cart added!");
      } else {
        existingProduct.quantity! += 1;
        toast.success("Increase product quantity!");
      }
    },
    increaseQuantity: (state, action) => {
      const existingProduct = state.cart.find(
        (obj: productType) => obj?.id === action.payload?.id
      );
      const quantity: number = existingProduct?.quantity!;
      if (quantity < 100) {
        existingProduct!.quantity! += 1;
      } else {
        toast("You can not add more then 100!");
      }
    },
    decreaseQuantity: (state, action) => {
      const existingProduct = state.cart.find(
        (obj) => obj?.id === action.payload?.id
      );
      const quantity: number = existingProduct?.quantity!;
      if (quantity > 1) {
        existingProduct!.quantity! -= 1;
      } else {
        toast.error("You can not less more then 1!");
      }
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

// const initialState = {
//   user: null
// }
// export default function User(state = initialState, action){
//   console.log('User action', action);
// }
