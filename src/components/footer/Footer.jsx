import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-black text-white pt-14 pb-6 flex flex-col gap-8  mt-8 px-8">
      <div className="">
        <div className="flex  flex-col md:flex-row gap-48 md:gap-0 w-full justify-between max-w-screen-xl mx-auto ">
          <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
            <div className="flex flex-col gap-3 shrink-0">
              <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                Find a store
              </div>
              <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                become a partner
              </div>
              <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                sign up for email
              </div>
              <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                send us feedback
              </div>
              <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                student discount
              </div>
            </div>

            <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0">
              <div className="flex flex-col gap-3">
                <div className="font-oswald font-medium uppercase text-sm">
                  get help
                </div>
                <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                  Order Status
                </div>
                <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                  Delivery
                </div>
                <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                  Returns
                </div>
                <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                  Payment Options
                </div>
                <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                  Contact Us
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="font-oswald font-medium uppercase text-sm">
                  About meveea
                </div>
                <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                  News
                </div>
                <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                  Careers
                </div>
                <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                  Investors
                </div>
                <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                  Sustainability
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4 justify-center md:justify-start">
            <div
              onClick={() => window.open("https://facebook.com", "_blank")}
              className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
            >
              <FaFacebookF size={20} />
            </div>
            <div
              href="https://twitter.com"
              className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
            >
              <FaTwitter size={20} />
            </div>
            <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
              <FaYoutube size={20} />
            </div>
            <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
              <FaInstagram size={20} />
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0 max-w-screen-xl mx-auto">
          <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer text-center md:text-left">
            © 2024 MEEVEA, Inc. All Rights Reserved
          </div>

          <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
            <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
              Guides
            </div>
            <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
              Terms of Sale
            </div>
            <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
              Terms of Use
            </div>
            <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
              Privacy Policy
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
