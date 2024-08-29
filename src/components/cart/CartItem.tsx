import React from "react";
import { productType } from "../../../type";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "@/redux/cart/cartSlice";

interface props {
  item: productType;
}

const CartItem = ({ item }: props) => {
  const dispatch = useDispatch();

  const increase = (id: number) => {
    dispatch(increaseQuantity({ id }));
  };
  const decrease = (id: number) => {
    dispatch(decreaseQuantity({ id }));
  };

  return (
    <div className="p-4 flex gap-1 justify-between items-center bg-white rounded">
      <Image
        src={item?.images[0]}
        alt={item?.title}
        height={200}
        width={200}
        className="w-32 h-32 object-contain"
      />
      <div className="w-2/5">
        <h1 className="text-xl font-bold ">{item?.title}</h1>
        <p className="text-base mt-1 text-gray-500">
          {item?.description.slice(0, 70)}...
        </p>
      </div>
      <div className="flex items-center gap-1">
        <button
          onClick={() => decrease(item?.id)}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 duration-300 text-xl"
        >
          -
        </button>
        <p className="px-2 w-8">{ item?.quantity }</p>
        <button
          onClick={() => increase(item?.id)}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 duration-300 text-xl"
        >
          +
        </button>
      </div>
      <p className="w-16">${item?.price}</p>
    </div>
  );
};

export default CartItem;
