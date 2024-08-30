import Container from "@/components/Container";
import ImageCart from "@/components/products/ImageCart";
import { getData } from "@/helper/fetchData";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React from "react";
import { productType } from "../../../../type";
import Link from "next/link";
import AddToCardButton from "@/components/AddToCardButton";

interface props {
  params: string;
}

const SingleProductPage = async ({ params }: Params) => {
  const endpoint = `https://dummyjson.com/products/${params?.id}`;
  const product: productType = await getData(endpoint);

  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-5">
        <div className="p-5">
          <ImageCart product={product} />
        </div>
        <div className="p-4 flex flex-col gap-5">
          <div>
            <p className="text-sm text-gray-500">{product?.category}</p>
            <h1 className="text-3xl font-bold">{product?.title}</h1>
          </div>
          <Link href={`store/${product?.brand}`}>
            <span className="bg-green-100 hover:text-blue duration-300 px-3 py-1 text-sm">
              {product?.brand}
            </span>
          </Link>
          <p className="text-gray-600">{product?.description}</p>
          <div className="flex items-end gap-2">
            <span className="text-2xl">
              $
              {(
                product?.price -
                (product?.price / 100) * product?.discountPercentage
              ).toFixed(2)}
            </span>
            <s className="text-gray-500">${product?.price.toFixed(2)}</s>
          </div>
          <p className="text-green-700">{product?.stock} product available.</p>
          <AddToCardButton product={product} />
          <Link href={'/checkout'} className="bg-blue text-white py-2 text-center font-bold hover:bg-blackbg duration-300">Buy Now</Link>
        </div>
      </div>
    </Container>
  );
};

export default SingleProductPage;
