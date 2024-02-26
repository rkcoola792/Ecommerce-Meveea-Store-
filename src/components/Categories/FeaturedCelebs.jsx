import React from 'react'

const FeaturedCelebs = ({celebs}) => {
    const {name,img}=celebs
  return (
    <div  className='flex flex-col gap-1 justify-center items-center cursor-pointer '>
      <div className="celeb-category bg-slate-100 w-[200px] h-[200px] rounded-[50%]  ">
        <img src={img} alt="" className="object-cover w-full h-full rounded-[50%]" />
      </div>
      <p>{name}</p>
    </div>
  );
}

export default FeaturedCelebs
