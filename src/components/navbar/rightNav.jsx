import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
const RightNav = () => {
  return (
    <div className="flex gap-4 items-center">
      <FavoriteBorderIcon className="text-sm cursor-pointer" />
      <PersonOutlineOutlinedIcon className="cursor-pointer" />
      <ShoppingCartOutlinedIcon className="cursor-pointer" />
    </div>
  );
};

export default RightNav;
