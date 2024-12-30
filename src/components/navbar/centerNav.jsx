import React from "react";

const CenterNav = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-sm font-medium">
      <p className="cursor-pointer">TOPWEAR</p>
      <p className="cursor-pointer">BOTTOMWEAR</p>
      <p className="cursor-pointer">HOTSELLER</p>
      <p className="cursor-pointer">FEATURED</p>
      <p className="cursor-pointer">NEW ARRIVAL</p>
    </div>
  );
};

export default CenterNav;
