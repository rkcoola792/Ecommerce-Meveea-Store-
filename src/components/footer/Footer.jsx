import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-col p-6 px-8">
      <div className="top flex gap-48">
        <div className="categores">
          <h1 className="text-2xl text-gray-600 pb-2">Categories</h1>
          <p className="text-gray-500">Men</p>
          <p className="text-gray-500">Women</p>
          <p className="text-gray-500">Children</p>
          <p className="text-gray-500">Shoes</p>
          <p className="text-gray-500">Accessories</p>
          <p className="text-gray-500">New Arrivals</p>
        </div>
        <div className="links ">
          <h1 className="text-2xl pb-2 text-gray-600">Links</h1>
          <p className="text-gray-500">FAQ</p>
          <p className="text-gray-500">Pages</p>
          <p className="text-gray-500">Stores</p>
          <p className="text-gray-500">Compare</p>
          <p className="text-gray-500">Cookies</p>
        </div>
        <div className="about">
          <h1 className="text-2xl text-gray-600 pb-2">About</h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            commodi similique veritatis amet alias minima quibusdam esse
            blanditiis aliquam non voluptatum aperiam ullam possimus repellendus
            saepe, sed, rem sapiente maiores.
          </p>
        </div>
        <div className="contact">
          <h1 className="text-2xl text-gray-600 pb-2">Contact</h1>
          <p className="text-gray-500">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            cupiditate tempore. Facere voluptatem veniam aspernatur asperiores
            labore temporibus optio quos nam doloremque aperiam, eveniet laborum
            beatae! Odit error asperiores quia.
          </p>
        </div>
      </div>
      <div className="bottom flex items-center justify-between">
        <div className='flex gap-4 items-center '>
          <h1 className="text-3xl font-bold text-blue-400"> MEVEEA STORE</h1>
          <p className='text-gray-500'>© Copyright 2024. All rights reserved.</p>
        </div>
        <div>
          <img src="img/safe-checkout.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer
