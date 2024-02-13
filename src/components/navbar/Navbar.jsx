import React from 'react'
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from 'react-router-dom';
import "./navbar.scss"

const Circle=()=>{
  return (
    <>
      <div className="h-6 rounded-full absolute bg-blue-500 w-6 -top-3 -right-3">
        <span className="text-white flex justify-center align-middle  ">2</span>
      </div>
    </>
  );
}
const Navbar = () => {
  return (
    <div className="navbar p-6 px-8 shadow-lg">
      <div className="wrapper flex justify-between items-center">
        <div className="left ">
          <div className="left-items flex gap-4 align-middle">
            <img src="img/flag.webp" style={{ height: 20 }} alt="" />
            <KeyboardArrowDownIcon />
            <div className="item hidden md:block">
              <Link to="/product/1">
                <span>Men</span>
              </Link>
            </div>
            <div className="item hidden md:block">
              <Link to="/product/2">
                <span>Women</span>
              </Link>
            </div>
            <div className="item hidden md:block">
              <Link to="/product/3">
                <span>Children</span>
              </Link>
            </div>
            <div className="item hidden md:block">
              <Link to="/product/4">
                {" "}
                <span>Accessories</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="center">
          <Link to="/">
            <h1 className="text-2xl ">Meveea Store</h1>
          </Link>{" "}
        </div>
        <div className="right">
          <div className="right-items flex gap-4 align-top">
            <div className="item hidden md:block">
              <Link to="/">
                <span>Homepage</span>
              </Link>
            </div>{" "}
            <div className="item hidden md:block">
              <Link to="/about">
                <span>About</span>
              </Link>
            </div>{" "}
            <div className="item hidden md:block">
              <Link to="/contact">
                <span>Contact</span>
              </Link>
            </div>{" "}
            <div className="item hidden md:block">
              <Link to="/store">
                <span>Store</span>
              </Link>
            </div>
            <SearchIcon className="text-slate-500 hidden md:block"></SearchIcon>
            <PersonOutlineOutlinedIcon className="text-slate-500 hidden md:block"></PersonOutlineOutlinedIcon>
            <FavoriteBorderIcon className="text-slate-500 hidden md:block"></FavoriteBorderIcon>
            <div className="cartIcon relative">
              <ShoppingCartOutlinedIcon className="text-slate-500"></ShoppingCartOutlinedIcon>
              <Circle></Circle>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar
