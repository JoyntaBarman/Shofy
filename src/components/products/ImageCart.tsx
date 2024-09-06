"use client";
import Image from "next/image";
import React, { useState } from "react";
import { productType } from "../../../type";

interface props {
  product: productType;
}

const ImageCart = ({ product }: props) => {
  const images = product?.images;
  const [currentImage, setCurrentImage] = useState(images[0]);
  console.log(images)
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between gap-2 rounded-md">
      <div className="w-full lg:w-1/6 flex lg:flex-col gap-2 justify-center lg:justify-start flex-nowrap">
        {images.map((item, index) => (
          <div
            key={item}
            onClick={() => setCurrentImage(item)}
            className={`w-1/6 lg:w-full border ${
              item === currentImage ? "border-blue/70" : "border-gray-300"
            } rounded-md cursor-pointer`}
          >
            <Image
              src={item}
              alt="shofy"
              width={200}
              height={200}
              className="w-full h-full object-contain aspect-square"
            />
          </div>
        ))}
      </div>
      <div className="bg-gray-100 w-full">
        <Image
          src={currentImage}
          alt={product?.title}
          width={500}
          height={500}
          className="w-full h-full object-contain aspect-square"
        />
      </div>
    </div>
  );
};

export default ImageCart;
