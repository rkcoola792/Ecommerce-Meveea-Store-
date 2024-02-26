import React from 'react'
import {Link} from "react-router-dom"
import "./card.scss"
const Card = ({data}) => {
  console.log("dattataa",data)
  const{img1,img2,isNew,newPrice,oldPrice,title,id}=data;
  console.log(isNew)
  return (
    <Link to={`/product/${id}`}>
      <div className="images-container flex flex-col w-[240px] rounded-md">
        <div className="images overflow-hidden w-[100%] h-[340px] relative ">
          {isNew && (
            <span className="text-teal-300 absolute z-20 bg-white px-2 m-1 rounded-sm bg-opacity-75">
              New Season
            </span>
          )}
          <img
            src={img1}
            alt="mainImg"
            className="w-[100%] h-[100%] object-cover absolute mainImg rounded-md"
          />
          <img
            src={img2}
            alt="secondImg"
            className="w-[100%] h-[100%] object-cover absolute secondImg"
          />
        </div>
        <div className="information">
          <h1 className='text-lg '>{title}</h1>
          <div className="prices flex gap-2">
            <p className="line-through text-gray-400">{oldPrice}</p>
            <p className="">{newPrice}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card
