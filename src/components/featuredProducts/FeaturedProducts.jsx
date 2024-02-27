import React, { useState } from 'react'
import Card from '../card/Card';

const FeaturedProducts = (props) => {
    const data = [
      {
        id: 1,
        img1: "/vertical/2.jpg",
        img2: "/vertical/a.jpg",
        title: "Long sleeve",
        isNew: true,
        oldPrice: "$15",
        newPrice: "$12",
      },
      {
        id: 2,
        img1: "/vertical/3.jpg",
        img2: "/vertical/4.jpg",
        title: "Coat",
        isNew: false,
        oldPrice: "$25",
        newPrice: "$20",
      },
      {
        id: 3,
        img1: "/vertical/5.jpg",
        img2: "/vertical/6.jpg",
        title: "Formals",
        isNew: true,
        oldPrice: "$30",
        newPrice: "$27",
      },
      {
        id: 4,
        img1: "/vertical/7.jpg",
        img2: "/vertical/8.jpg",
        title: "Pants",
        isNew: false,
        oldPrice: "$6",
        newPrice: "$5",
      },
      // {
      //   id: 5,
      //   img1: "public/vertical/9.jpg",
      //   img2: "public/vertical/10.jpg",
      //   title: "Overcoat",
      //   isNew: true,
      //   oldPrice: "$24",
      //   newPrice: "$20",
      // },
      // {
      //   id: 6,
      //   img1: "public/vertical/11.jpg",
      //   img2: "public/vertical/12.jpg",
      //   title: "Long sleeve",
      //   isNew: true,
      //   oldPrice: "$15",
      //   newPrice: "$12",
      // },
      // {
      //   id: 1,
      //   img1: "public/vertical/2.jpg",
      //   img2: "public/vertical/a.jpg",
      //   title: "Long sleeve",
      //   isNew: true,
      //   oldPrice: "$15",
      //   newPrice: "$12",
      // },
      // {
      //   id: 1,
      //   img1: "public/vertical/2.jpg",
      //   img2: "public/vertical/a.jpg",
      //   title: "Long sleeve",
      //   isNew: true,
      //   oldPrice: "$15",
      //   newPrice: "$12",
      // },
    ];

  return (
    <div className="fetured-trending-products mx-28 flex-col gap-8 justify-center items-center my-12 ">
      <div className="text-part flex gap-24 justify-between items-center mb-6">
        <h1 className="text-3xl ">{props.title}</h1>
        <p className="description text-gray-500 w-[700px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
          adipisci aspernatur et, porro ipsam.Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Voluptate adipisci aspernatur et, porro
        </p>
      </div>
      <div className="bottom flex gap-8 ml-8">
        {data.map((ele) => (
            <Card data={ele}></Card>
          
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts
