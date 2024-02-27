import React, { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
const Product = () => {
  const images = ["/Horizontal/10.jpg", "/Horizontal/9.jpg"];
  const [mainImg, setMainImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="product flex m-8 gap-8">
      <div className="left w-1/2 flex gap-4 ">
        <div className="images">
          <img
            className="w-32 h-32 object-cover"
            src={images[0]}
            alt=""
            onClick={(e) => setMainImg(0)}
          />
          <img
            className="w-32 h-32 object-cover"
            src={images[1]}
            alt=""
            onClick={(e) => setMainImg(1)}
          />
        </div>
        <div className="mainImage w-full">
          <img
            className="h-[450px] object-cover"
            src={images[mainImg]}
            alt=""
          />
        </div>
      </div>
      <div className="right w-1/2 flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Title</h1>
        <p className="text-blue-500 text-xl font-semibold">Price : $20</p>
        <p className="text-gray-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa modi
          tempora corrupti sint corporis omnis necessitatibus quaerat quam animi
          accusantium quae sit consectetur, ea soluta autem optio a dolorem
          explicabo.
        </p>

        <div>
          <button
            className="cursor-pointer bg-gray-200 w-10 h-10 rounded-sm mr-4"
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button
            className="cursor-pointer bg-gray-200 w-10 h-10 rounded-sm mx-4"
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            +
          </button>
        </div>

        <div className="">
          <button className="bg-blue-500 text-white rounded-sm p-2 px-4 mb-2">
            <span>
              <AddShoppingCartIcon></AddShoppingCartIcon>
            </span>
            Add to cart
          </button>
          <div className="buttons flex gap-2 ">
            <button className="text-sm text-blue-500">
              <span className="mr-2">
                <BalanceIcon></BalanceIcon>
              </span>
              Add to compare
            </button>
            <button className="text-sm text-blue-500">
              {" "}
              <span className="mr-2 ml-2">
                <FavoriteBorderIcon></FavoriteBorderIcon>
              </span>
              Add to wishlist
            </button>
          </div>
        </div>
        <div className="productInfo">
          <p className="text-gray-500 text-sm">Product type</p>
          <p className="text-gray-500 text-sm">Tag</p>
        </div>
          {/* <hr className="text-gray-500" /> */}

        <div>
          <h1 className="text-gray-500 text-sm">Description</h1>
          <h1 className="text-gray-500 text-sm">Additional Information</h1>
          <h1 className="text-gray-500 text-sm">FAQ</h1>
        </div>
      </div>
    </div>
  );
};

export default Product;
