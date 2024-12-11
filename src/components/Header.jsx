import React, { useState } from "react";
import {
  FaShoppingCart,
  FaUser,
  FaSearch,
  FaBars,
  FaHeart,
} from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="bg-black text-white">
      <div className="py-3 px-3 max-w-[1490px] mx-auto flex items-center justify-between gap-1 lg:gap-3">
        <a to="/" className="text-lg font-semibold">
          Email
        </a>
        <div className="hidden lg:flex md:gap-5 xl:gap-9 text-base">
          <a to="/" className="hover:underline">
            Home
          </a>
          <a>All Categories</a>
          <a>Mens</a>
          <a>Womens</a>
          <a>Kids</a>
          <a>Brands</a>
        </div>
        <div className="ml-1 md:ml-5 mr-5 w-48 md:w-full  lg:w-80 rounded text-black relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-2 py-[2px] rounded outline-none"
          />
          <FaSearch className="absolute top-2 right-2" />
        </div>
        <div className="flex items-center gap-3 text-lg">
          <div>
            <FaHeart className="text-white" />
          </div>
          <div className="relative">
            <FaShoppingCart />
            <span className="absolute -top-4 -right-3 text-red-500">0</span>
          </div>
          <div className="flex items-center relative">
            <FaUser className="cursor-pointer" />
          </div>
        </div>
        <div onClick={() => setMenu(!menu)} className="lg:hidden text-lg">
          <FaBars />
        </div>
        {menu && (
          <div className="absolute top-0 bottom-0 left-0 z-10 w-64 h-screen bg-black">
            <div className="flex-col px-3 pt-2 text-lg font-medium">
              <a
                onClick={() => smallScreenNavigate("home")}
                className="block pb-1"
                to="/"
              >
                Home
              </a>
              <a
                onClick={() => smallScreenNavigate("all categories")}
                className="block pb-1"
              >
                All Categories
              </a>
              <a
                onClick={() => smallScreenNavigate("mens")}
                className="block pb-1"
              >
                Mens
              </a>
              <a
                onClick={() => smallScreenNavigate("womens")}
                className="block pb-1"
              >
                Womens
              </a>
              <a
                onClick={() => smallScreenNavigate("brands")}
                className="block"
              >
                Brands
              </a>
            </div>
            <FaXmark
              onClick={() => setMenu(false)}
              className="text-2xl absolute top-3 right-2"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
