import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
const RightNav = () => {
  return (
    <div className="flex gap-4 items-center">
      <FavoriteBorderIcon  className="text-sm"/>
      <PersonOutlineOutlinedIcon />
      <ShoppingCartOutlinedIcon />
    </div>
  );
};

export default RightNav;
