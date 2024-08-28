'use client';
import { productType } from '../../type';
import React from 'react';
import ProductCard from './ProductCard';
import { isArray } from 'util';

interface props {
  product: {
    products: productType[];
  };
}

const ProductList = ({ product }: props) => {
  const productArray = product.products;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {productArray?.map((item) => (
        <ProductCard key={item?.id} product={item}></ProductCard>
      ))}
    </div>
  );
};

export default ProductList;
