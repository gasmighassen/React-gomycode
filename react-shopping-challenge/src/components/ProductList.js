import React, { useState } from "react";
import ProductCard from "./ProductCard";
import "./ProdList.css";
const ProductList = ({ products }) => {
  return (
    <div className="wrapper">
      {products.map((product) => (
        <ProductCard key={product.id} products={product} />
      ))}
    </div>
  );
};

export default ProductList;
