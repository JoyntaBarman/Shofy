import React from "react";
import { productType } from "../../../type";
import PriceFormate from "./PriceFormate";

interface props {
  cart: productType[];
}

const CheackOut = ({ cart }: props) => {
  const total = cart.reduce((preValue, currentValue) => {
    return preValue + currentValue?.price * currentValue?.quantity!;
  }, 0);

  return (
    <div>
      <h1 className="text-xl font-bold text">Checkout</h1>

      <p className="flex items-center justify-between">
        Subtotal: <PriceFormate price={total}></PriceFormate>
      </p>
      <p className="flex items-center justify-between">
        Shipping: <PriceFormate price={2.00}></PriceFormate>
      </p>
      <p className="flex items-center justify-between">
        Total: <PriceFormate price={total + 2}></PriceFormate>
      </p>
    </div>
  );
};

export default CheackOut;
