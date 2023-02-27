import React from "react";
import { useDispatch } from "react-redux";
import logo from "../assets/logo.png";
import { changeRoute } from "../redux/route/actions";

export default function Header() {
  const dispatch = useDispatch();

  // handle route
  const handleRoute = (route) => {
    dispatch(changeRoute(route));
  };
  return (
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar">
        <img
          src={logo}
          alt="LWS"
          className="max-w-[140px] cursor-pointer"
          onClick={() => handleRoute("home")}
        />

        <div className="flex gap-4">
          <span
            className="navHome cursor-pointer"
            id="lws-home"
            onClick={() => handleRoute("home")}
          >
            Home
          </span>
          <span
            className="navCart cursor-pointer"
            id="lws-cart"
            onClick={() => handleRoute("cart")}
          >
            <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
            <span id="lws-totalCart">0</span>
          </span>
        </div>
      </div>
    </nav>
  );
}
