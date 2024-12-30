import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IoPersonOutline } from "react-icons/io5";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { CiShoppingCart } from "react-icons/ci";
import { FiHeart } from "react-icons/fi";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const RightNav = () => {
  return (
    <div className="flex gap-4 items-center">
      <FiHeart className="cursor-pointer" />
      <IoPersonOutline className="cursor-pointer" />
      <Link to="/cart">
        <IoCartOutline className="cursor-pointer" />
      </Link>
    </div>
  );
};

export default RightNav;
