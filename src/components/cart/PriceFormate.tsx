import React from "react";
import { twMerge } from "tailwind-merge";

interface props {
  className?: string;
  price: number;
}

const PriceFormate = ({ className, price }: props) => {
  const formatedPrice = new Number(price).toLocaleString('en-US', {style: "currency", currency: "USD", maximumFractionDigits: 2});

  return <p className={twMerge('', className)}>{formatedPrice}</p>;
};

export default PriceFormate;
