import { nanoid } from "nanoid";
import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

export default function Products() {
  const products = useSelector((state) => state.cartAndProduct.products);

  return (
    <div className="productContainer" id="lws-productContainer">
      {products.map((product) => (
        <ProductCard key={nanoid()} product={product} />
      ))}
    </div>
  );
}
