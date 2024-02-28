import React from 'react'
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const Social = () => {
  return (
    <div className=" text-white flex justify-center  gap-12 items-center socialHandle w-screen h-20 bg-blue-500">
      <h1>BE IN TOUCH WIH US</h1>
      <div>
        <input
          className="p-1 px-2 rounded-sm"
          type="text"
          name=""
          id=""
          placeholder="Enter your email"
        />
        <button className="bg-black p-1.5 px-4 rounded-sm">JOIN US</button>
      </div>
      <div className="socialHandles flex gap-2">
        <InstagramIcon />
        <WhatsAppIcon />
        <XIcon />
        <FacebookIcon />
      </div>
    </div>
  );
}

export default Social
