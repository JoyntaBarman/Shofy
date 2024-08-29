"use client";
import React from "react";
import { useSelector } from "react-redux";
import { StateType, productType } from "../../../type";
import CartItem from "./CartItem";
import PreviousMap from "postcss/lib/previous-map";
import CheackOut from "./CheackOut";

interface Cart {
  cart: productType[];
}

const CartList = () => {
  const cart = useSelector(
    (state: StateType) => state?.cart?.cart as productType[]
  );


  return (
    <>
      {cart.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-5 bg-pink-50 p-5 rounded">
          <div className="md:col-span-8 flex flex-col gap-4">
            {cart.map((item) => (
              <CartItem key={item?.title} item={item} />
            ))}
          </div>
          <div className="md:col-span-4">
            <CheackOut cart={cart}/>

          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-[70vh] text-4xl text-gray-400 font-bold">
          Empty cart!
        </div>
      )}
    </>
  );
};

export default CartList;
