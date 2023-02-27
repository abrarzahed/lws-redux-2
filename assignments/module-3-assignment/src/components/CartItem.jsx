import React from "react";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  removeItem,
} from "../redux/product/actions";

export default function CartItem({ item = {} }) {
  const dispatch = useDispatch();
  const { id, productName, url, category, price, slice } = item;

  const handleIncrement = () => {
    dispatch(addToCart(id));
  };

  const handleDecrement = () => {
    dispatch(removeFromCart(id));
  };

  const handleDelete = () => {
    dispatch(removeItem(id));
  };
  return (
    <div className="cartCard">
      <div className="flex items-center col-span-6 space-x-6">
        {/* <!-- cart image --> */}
        <img className="lws-cartImage" src={url} alt="product" />
        {/* <!-- cart item info --> */}
        <div className="space-y-2">
          <h4 className="lws-cartName">{productName}</h4>
          <p className="lws-cartCategory">{category}</p>
          <p>
            BDT <span className="lws-cartPrice">{price}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
        {/* <!-- amount buttons --> */}
        <div className="flex items-center space-x-4">
          <button className="lws-incrementQuantity" onClick={handleIncrement}>
            <i className="text-lg fa-solid fa-plus"></i>
          </button>
          <span className="lws-cartQuantity">{slice}</span>
          <button className="lws-decrementQuantity">
            <i
              className="text-lg fa-solid fa-minus"
              onClick={handleDecrement}
            ></i>
          </button>
        </div>
        {/* <!-- price --> */}
        <p className="text-lg font-bold">
          BDT <span className="lws-calculatedPrice">{price * slice}</span>
        </p>
      </div>
      {/* <!-- delete button --> */}
      <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
        <button className="lws-removeFromCart" onClick={handleDelete}>
          <i className="text-lg text-red-400 fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
}
