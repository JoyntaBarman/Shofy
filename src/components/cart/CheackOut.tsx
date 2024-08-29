import React from "react";
import { productType } from "../../../type";

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
        Subtotal: <span>{total.toFixed(2)} $</span>
      </p>
      <p className="flex items-center justify-between">
        Shipping: <span>{2} $</span>
      </p>
      <p className="flex items-center justify-between">
        Total: <span>{(total + 2).toFixed(2)} $</span>
      </p>
    </div>
  );
};

export default CheackOut;
