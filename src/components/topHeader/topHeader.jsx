import React from "react";

const TopHeader = () => {
  return (
    <div className="bg-black text-white  px-4 ">
      <div className="max-w-screen-lg flex items-center justify-between mx-auto h-10 text-sm 
      ">
        <div className="flex items-center gap-8 ">
          <p>WOMEN</p>
          <p>MEN</p>
        </div>
        <div className="flex items-center gap-8">
          <p>Track Order</p>
          <p>Contact Us</p>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
