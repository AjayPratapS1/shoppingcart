import React from "react";
import logo from "../assects/logo.png";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  return (
    <div className=" w-full bg-[#0F172A] h-20 mx-auto flex justify-center p-4 ">
      <nav className="max-w-6xl w-10/12 mx-auto flex justify-between items-center">
        <NavLink to="/">
          <div className="w-40 h-40 flex justify-center items-center">
            <img className="w-fit" alt="logo" src={`${logo}`} />
          </div>
        </NavLink>
        <div className="text-white flex gap-6 justify-center items-center">
          <NavLink to="/">
            <div className="text-base font-normal">Home</div>
          </NavLink>

          <NavLink to="/cart">
            <div className="relative">
              <FaShoppingCart className="w-6 h-6" />
              <div className="bg-[#16A34A] flex justify-center items-center absolute -top-1 -right-2 animate-bounce w-5  h-5 rounded-full p-2">
                <p className=" w-fit text-white text-sm font-normal ">
                  {cart.length}
                </p>
              </div>
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
