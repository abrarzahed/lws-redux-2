import React from "react";
import AddProduct from "./AddProduct";
import Products from "./Products";

export default function HomePage() {
  return (
    <main className="py-16">
      <div className="productWrapper">
        <Products />
        <AddProduct />
      </div>
    </main>
  );
}
