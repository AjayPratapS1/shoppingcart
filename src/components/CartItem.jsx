import React from "react";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/CartSlice";

const CartItem = ({ item, itemIndex, cartLength }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item remove from cart!");
  };
  return (
    <>
      <div className="max-w-full sm:w-full items-center flex flex-col sm:flex-row gap-10 p-5 mt-8">
        <div className="w-[60%] sm:w-[30%]">
          <img src={item.image} alt="Item" className="w-full h-full object-contain" />
        </div>
        <div className="w-full sm:w-[60%] flex flex-col justify-center gap-5">
          <p className="text-sm sm:text-xl font-semibold text-gray-700">{item.title}</p>
          <p className="text-sm font-normal text-gray-700 ">
            {item.description.split(" ").slice(0, 15).join(" ") + "..."}
          </p>

          <div className="flex items-center justify-between">
            <p className="text-green-600 font-bold text-lg">${item.price}</p>
            <div
              onClick={removeFromCart}
              className="w-10 h-10 p-3 bg-red-300 rounded-full flex justify-center items-center"
            >
              <MdDelete className="text-red-800" />
            </div>
          </div>
        </div>
      </div>
      {itemIndex !== cartLength - 1 && (
        <hr className="h-[.08rem] border-t-2 border-slate-500 mt-2 mb- md:mx-1" />
      )}
    </>
  );
};

export default CartItem;
