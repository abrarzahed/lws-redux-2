import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/product/actions";

export default function ProductCard({ product = {} }) {
  const dispatch = useDispatch();
  const { id, productName, url, category, price, quantity } = product;

  // handle add to cart
  const handleAddToCart = () => {
    dispatch(addToCart(id));
  };
  return (
    <div className="lws-productCard">
      <img className="lws-productImage" src={url} alt="product" />
      <div className="p-4 space-y-2">
        <h4 className="lws-productName">{productName}</h4>
        <p className="lws-productCategory">{category}</p>
        <div className="flex items-center justify-between pb-2">
          <p className="productPrice">
            BDT <span className="lws-price">{price}</span>
          </p>
          <p className="productQuantity">
            QTY <span className="lws-quantity">{quantity}</span>
          </p>
        </div>
        <button
          disabled={quantity === 0}
          className="lws-btnAddToCart disabled:bg-white disabled:cursor-none"
          onClick={handleAddToCart}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
