import React, { useState } from "react";
import { Link } from "react-router-dom";
import CenterNav from "./centerNav";
import RightNav from "./rightNav";
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="mx-auto shadow-md sticky top-0 z-50 bg-white font-oswald">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-12">
          <Link to="/">
            <h1 className="font-semibold text-2xl">MEEVEA</h1>
          </Link>
          <div className="hidden md:flex">
            <CenterNav />
          </div>
          <div className="flex items-center space-x-4">
            <RightNav />
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="material-icons"><RxHamburgerMenu /></span>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden">
            <CenterNav menuOpen={menuOpen}/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
