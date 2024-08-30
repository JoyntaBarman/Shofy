"use client";
import { useDispatch, useSelector } from "react-redux";
import { productType, StateType } from "../../type";
import { addToCart, decreaseQuantity, increaseQuantity } from "@/redux/cart/cartSlice";
import { useEffect, useState } from "react";

interface props {
  product: productType;
}

const AddToCardButton = ({ product }: props) => {
  const [existingProduct, setExistingProduct] = useState<productType | null>(
    null
  );
  const cart = useSelector((state: StateType) => state?.cart?.cart);
  const dispatcher = useDispatch();
  const handleClick = () => {
    dispatcher(addToCart(product));
  };

  useEffect(() => {
    const availableProduct = cart?.find((obj) => obj?.id === product?.id);
    if (availableProduct) {
      setExistingProduct(availableProduct);
    }
  }, [product, cart]);

  const handleIncreaseQuantity = () => {
    dispatcher(increaseQuantity({id: product?.id}))
  }
  const handleDecreaseQuantity =() => {
    dispatcher(decreaseQuantity({id: product?.id}))
  }

  return (
    <>
      {existingProduct ? (
        <div className="flex items-center justify-center gap-5 bg-gray-800 text-white py-1">
          <button
            onClick={handleDecreaseQuantity}
            className="px-3 py-1 rounded hover:bg-blue duration-300 text-xl"
          >
            -
          </button>
          <p className="px-2 w-8">{existingProduct?.quantity}</p>
          <button
            onClick={handleIncreaseQuantity}
            className="px-3 py-1 rounded hover:bg-blue duration-300 text-xl"
          >
            +
          </button>
        </div>
      ) : (
        <button
          onClick={handleClick}
          className="bg-blackbg  hover:bg-blue duration-300 w-full py-2 text-white"
        >
          Add to card
        </button>
      )}
    </>
  );
};

export default AddToCardButton;
