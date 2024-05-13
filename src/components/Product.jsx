import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slices/CartSlice";
import toast from "react-hot-toast";

const Product = ({ item }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);
  function removeToCart() {
    dispatch(remove(item.id));
    toast.error("Item remove from cart!");
  }
  function addToCart() {
    dispatch(add(item));
    toast.success("Item added to cart!");
  }
  return (
    <div className="group sm:max-w-64 sm:w-64 w-96 max-w-96 max-h-96 mt-6 ml-1 flex flex-col justify-center items-center gap-3 border p-4 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024] hover:scale-110 transition duration-300 ease-in">
      <div className=" w-40 truncate text-lg font-semibold text-gray-700">
        {item.title}
      </div>
      <div>
        <h1 className="w-40 text-wrap text-[10px] font-normal text-gray-400">
          {item.description.split(" ").slice(0, 10).join(" ") + "..."}
        </h1>
      </div>

      <div className=" h-44 flex justify-center items-center mt-2">
        <img src={item.image} alt="Item" className=" w-full h-full object-contain" />
      </div>
      <div className="w-full flex justify-between item-center mt-5">
        <div className=" text-green-600 font-semibold flex justify-center items-center">
          ${item.price}
        </div>
        <div className="group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in text-[12px] font-semibold text-gray-700 border-2  border-gray-700  rounded-full px-3 p-1 tracking-wide">
          {cart.some((p) => p.id === item.id) ? (
            <button onClick={removeToCart} className="uppercase">
              Remove Item
            </button>
          ) : (
            <button onClick={addToCart} className="uppercase">
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
