import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  return (
    <div className="max-w-6xl w-10/12 flex items-center justify-center mx-auto">
      {cart.length > 0 ? (
        <div className="w-full flex justify-between gap-10 p-4 ">
          <div className="max-w-[60%]">
            {cart.map((item, index) => (
              <CartItem
                key={item.id}
                itemIndex={index}
                item={item}
                cartLength={cart.length}
              />
            ))}
          </div>

          <div className="flex flex-col gap-3 max-w-[40%] w-[40%] p-5 mt-16">
            <div className="mb-4">
              <p className="text-green-800 text-xl font-semibold">YOUR CART</p>
              <p className="text-green-700 text-5xl font-bold mb-4">SUMMARY</p>
              <p className="text-gray-700 text-xl font-semibold mb-2">
                Total Items: <span>{cart.length}</span>
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-gray-700 text-xl font-bold mb-2">
                Total Amount
                <span className="text-black"> : ${totalAmount}</span>
              </p>

              <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">
                CheckOut Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col gap-3 justify-center items-center mt-60">
          <p className="text-xl font-semibold text-gray-700">
            Your cart is empty!
          </p>
          <NavLink to="/">
            <button className="bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-6 w-fit text-xl">
              Shop Now
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
