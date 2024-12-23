import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import Cart from "../cart/Cart";
import CenterNav from "./centerNav";
import RightNav from "./rightNav";

const Circle = () => {
  return (
    <>
      <div className="h-6 rounded-full absolute bg-blue-500 w-6 -top-3 -right-3">
        <span className="text-white flex justify-center align-middle  ">2</span>
      </div>
    </>
  );
};
const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <div className="mx-auto shadow-md sticky top-0 z-50 bg-white">
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="flex items-center justify-between h-10 ">
          <h1 className="font-semibold text-2xl">MEEVEA</h1>
          <CenterNav />
          <RightNav />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
