import { nanoid } from "nanoid";
import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

export default function CartList() {
  const cartItems = useSelector((state) => state.cartAndProduct.cart);
  return (
    <div className="space-y-6">
      {cartItems?.map((item) => (
        <CartItem key={nanoid()} item={item} />
      ))}
    </div>
  );
}
