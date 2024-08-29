'use client'
import { useDispatch } from "react-redux";
import { productType } from "../../type";
import { addToCart } from "@/redux/cart/cartSlice";

interface props{
  product: productType
}

const AddToCardButton = ({product}: props) => {
  const withQuantity = {...product, quantity: 1};
  const dispatcher = useDispatch();
    const handleClick = () => {
      dispatcher(addToCart(withQuantity))
    }

  return (
    <button onClick={handleClick} className="bg-blackbg  hover:bg-blue duration-300 w-full py-2 text-white">
      Add to card
    </button>
  );
};

export default AddToCardButton;
