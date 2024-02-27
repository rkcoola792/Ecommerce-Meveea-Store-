import  List  from '../../components/list/List';
import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const Products = () => {
  const params=useParams()
  console.log("params",params.id)
  const [maxPrice,setMaxPrice]=useState("400")
  const [sort,setSort]=useState("asc")
  return (
    <div className="products flex ">
      <div className="left p-2 px-8 flex flex-col gap-4 flex-1 mt-4">
        <div className="filterItem flex flex-col gap-1">
          <h1 className="text-xl">Product Categories</h1>
          <div className="input flex flex-col ">
            <div className="flex gap-2">
              <input type="checkbox" id="1" value={1} />
              <label htmlFor="1" className="text-gray-600">
                T-shirts
              </label>
            </div>
            <div className="flex gap-2 ">
              <input type="checkbox" id="1" value={1} />
              <label htmlFor="1" className="text-gray-600">
                Coats
              </label>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="1" value={1} />
              <label htmlFor="1" className="text-gray-600">
                Hoodies
              </label>
            </div>
          </div>
        </div>
        <div className="filterRange flex flex-col gap-1">
          <h1 className="text-xl">Filter by price</h1>
          <div className="inputItem">
            <span>0</span>
            <input
              className="text-gray-600"
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="sort flex flex-col gap-1">
          <h2 className="text-xl">Sort by price</h2>
          <div className="">
            <div className="flex gap-2">
              <input
                type="radio"
                id="asc"
                value="asc"
                name="price"
                onChange={(e) => setSort("asc")}
              />
              <label htmlFor="asc" className="text-gray-600">
                Price (Lowest first)
              </label>
            </div>
            <div className="flex gap-2">
              <input
                type="radio"
                id="desc"
                value="desc"
                name="price"
                onChange={(e) => setSort("desc")}
              />
              <label htmlFor="desc" className="text-gray-600">
                Price (Highest first)
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="right w-[80%] mt-8">
        <div className="top-image mr-8 h-[250px] overflow-hidden">
          <img
            src="/Horizontal/2.jpg"
            className=" w-full object-cover"
            alt=""
          />
        </div>
          {/* <Link to ={`/product/${params.id}`}> */}
        <List categoryId={params.id} sort={sort} maxPrice={maxPrice}></List>
        {/* </Link> */}
      </div>
    </div>
  );
}

export default Products
