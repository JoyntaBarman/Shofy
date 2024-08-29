"use client";
import { productType } from "../../type";
import React from "react";
import ProductCard from "./ProductCard";
import { isArray } from "util";
import Container from "./Container";

interface props {
  product: {
    products: productType[];
  };
}

const ProductList = ({ product }: props) => {
  const productArray = product.products;

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {productArray?.map((item) => (
          <ProductCard key={item?.id} product={item}></ProductCard>
        ))}
      </div>
    </Container>
  );
};

export default ProductList;
