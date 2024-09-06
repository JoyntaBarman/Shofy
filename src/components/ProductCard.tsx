import React from "react";
import { productType } from "../../type";
import Image from "next/image";
import AddToCardButton from "./AddToCardButton";
import { RxLoop } from "react-icons/rx";
import { SlEye } from "react-icons/sl";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import Link from "next/link";

interface props {
  product: productType;
}

const Sidebar = () => {
  return (
    <div className="absolute bottom-16 -right-10 opacity-0 group-hover:right-2 group-hover:opacity-100  transition-all duration-300 flex flex-col shadow-md shadow-gray-300 bg-white">
      <Link href={""} className="border border-gray-300 p-1">
        <RxLoop size={24} className="hover:text-blue duration-300" />
      </Link>
      <Link href={""} className="border border-gray-300 p-1">
        <SlEye size={24} className="hover:text-blue duration-300" />
      </Link>
      <Link href={""} className="border border-gray-300 p-1">
        <MdOutlineFavoriteBorder
          size={24}
          className="hover:text-blue duration-300"
        />
      </Link>
    </div>
  );
};

const ProductCard = ({ product }: props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-4 shadow hover:shadow-lg hover:shadow-gray-300 duration-300 group">
      <div className=" w-full object-cover overflow-hidden relative duration-300">
        <Link
          href={{
            pathname: `products/${product.id}`,
            query: { id: product?.id },
          }}
        >
          <Image
            src={product?.images[0]}
            width={500}
            height={500}
            alt={product?.title}
            className="w-full h-64 object-contain group-hover:scale-110 duration-300 "
          />
        </Link>
        <div className="absolute top-2 right-2">
          <p className="px-2 bg-blue rounded text-white font-bold text-sm">
            -{product?.discountPercentage}%
          </p>
        </div>

        <div className="absolute  -bottom-14 group-hover:bottom-0 duration-300 transition-all left-0 w-full">
          <AddToCardButton product={product} />
        </div>
        <Sidebar />
      </div>
      <div className=" w-4/5 text-left">
        <div className="flex flex-col gap-1">
          <h3 className="text-gray-400 font-bold">{product?.category}</h3>
          <Link
            href={{
              pathname: `products/${product.id}`,
              query: { id: product?.id },
            }}
            className="font-bold text-xl leading-7  line-clamp-1 hover:text-blue duration-300"
          >
            {product?.title}
          </Link>
          <p className="line-clamp-3 text-sm font-semibold text-gray-700">{product?.description}</p>
          <p className="font-bold text-blue">TK {product?.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
