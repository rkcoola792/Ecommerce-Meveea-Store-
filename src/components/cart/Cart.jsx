import React from 'react'
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
const Cart = () => {
    const data = [
      {
        id: 1,
        img1: "/vertical/2.jpg",
        img2: "/vertical/a.jpg",
        title: "Long sleeve",
        isNew: true,
        oldPrice: "$15",
        newPrice: "$12",
        description:
          "Long over coat",
      },
      {
        id: 2,
        img1: "/vertical/3.jpg",
        img2: "/vertical/4.jpg",
        title: "Coat",
        isNew: false,
        oldPrice: "$25",
        newPrice: "$20",
        description:
          "Overcoats with fur",
      },
      {
        id: 3,
        img1: "/vertical/5.jpg",
        img2: "/vertical/6.jpg",
        title: "Formals",
        isNew: true,
        oldPrice: "$30",
        newPrice: "$27",
        description:
          "Lon sleeve t shirt"
      },
      //   {
      //     id: 4,
      //     img1: "/vertical/7.jpg",
      //     img2: "/vertical/8.jpg",
      //     title: "Pants",
      //     isNew: false,
      //     oldPrice: "$6",
      //     newPrice: "$5",
      //   },
      //   {
      //     id: 5,
      //     img1: "/vertical/9.jpg",
      //     img2: "/vertical/10.jpg",
      //     title: "Overcoat",
      //     isNew: true,
      //     oldPrice: "$24",
      //     newPrice: "$20",
      //   },
      //   {
      //     id: 6,
      //     img1: "/vertical/11.jpg",
      //     img2: "/vertical/12.jpg",
      //     title: "Long sleeve",
      //     isNew: true,
      //     oldPrice: "$15",
      //     newPrice: "$12",
      //   },
      //   {
      //     id: 1,
      //     img1: "/vertical/2.jpg",
      //     img2: "/vertical/a.jpg",
      //     title: "Long sleeve",
      //     isNew: true,
      //     oldPrice: "$15",
      //     newPrice: "$12",
      //   },
      //   {
      //     id: 1,
      //     img1: "/vertical/2.jpg",
      //     img2: "/vertical/a.jpg",
      //     title: "Long sleeve",
      //     isNew: true,
      //     oldPrice: "$15",
      //     newPrice: "$12",
      //   },
    ];

  return (
    <div className="cart absolute right-1 top-[85px] shadow-md w-[350px]  z-50 bg-white p-4 px-8">
      <h1
        className="text-xl text-gray-500 mb-2
      "
      >
        Products in your cart
      </h1>
      {data?.map((data) => (
        <div key={data.id} className="flex gap-2 mb-4 justify-between ">
          <div className="flex gap-2">
            <img
              src={data.img1}
              alt=""
              className=" w-[60px] h-[60px] object-cover"
            />
            <div>
              <p className=" text-gray-500 mb-1">{data.title}</p>
              <p className=" text-gray-500 text-xs mb-1">{data.description}</p>
              <p className="text-xs text-blue-500 mb-1">1*{data.newPrice}</p>
            </div>
          </div>
          <div className="deleteIcon mt-2 text-red-500">
            <DeleteOutlineIcon></DeleteOutlineIcon>
          </div>
        </div>
      ))}
      <div className="total flex justify-between">
        <span className="text-blue-500">Subtotal</span>
        <span>$123</span>
      </div>
      <div className="flex flex-col gap-1 mt-1">
        <button className="text-white bg-blue-500 px-4 p-2 rounded-sm text-sm">
          Proceed to checkout
        </button>
        <button className="text-red-500">Reset cart</button>
      </div>
    </div>
  );
}

export default Cart
