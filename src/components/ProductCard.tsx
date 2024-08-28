import React from 'react';
import { productType } from '../../type';
import Image from 'next/image';

interface props {
  product: productType
}

const ProductCard = ({ product }: props) => {
  return (
    <div className="flex flex-col items-center justify-center border border-gray-300 gap-2 p-4 shadow">
      <div className=" w-full object-cover">
        <Image
          src={product?.images[0]}
          width={500}
          height={500}
          alt={product?.title}
          className="w-full h-64 object-contain hover:scale-110 duration-300 "
        />
      </div>
      <div className=" w-4/5 ">
        <p className="text-gray-400 font-bold">{product?.category}</p>
        <p className="font-bold">{product?.title}</p>
      </div>
    </div>
  );
};

export default ProductCard;
