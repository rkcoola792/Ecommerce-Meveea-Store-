import React from 'react'
import Slider from '../../components/slider/Slider'
import FeaturedProducts from '../../components/featuredProducts/FeaturedProducts'
import FeaturedCelebs from '../../components/Categories/FeaturedCelebs'
import { Link } from 'react-router-dom'
import Social from '../../components/social/Social'
const Home = () => {
  let celeb = [
    {
      id: 1,
      name: "Kanye",
      img: "/Horizontal/5.jpg",
    },
    {
      id: 2,
      name: "Kylie",
      img: "/Horizontal/6.jpg",
    },
    {
      id: 3,
      name: "Justin",
      img: "/Horizontal/7.jpg",
    },
    {
      id: 4,
      name: "Drake",
      img: "/Horizontal/8.jpg",
    },
    {
      id: 5,
      name: "Ketty",
      img: "/Horizontal/9.jpg",
    },
    {
      id: 6,
      name: "Naruto",
      img: "/Horizontal/10.jpg",
    },
 
  ];
  return (
    <div>
      <Slider />
      
      <FeaturedProducts title="Featured" />
      <div className='artists flex flex-col gap-12 justify-center items-center mx-auto mb-20' > 
        <h1 className="text-3xl">Featured Artists</h1>
        <div className="celebs flex gap-8 flex-wrap w-[60%] px-8">
          {celeb.map((ele) => (
      <Link to={`artists/${ele?.name}`}>
            <FeaturedCelebs celebs={ele}></FeaturedCelebs>
      </Link>
          ))}
        </div>
      </div>

      <FeaturedProducts title="Trending" />
      
    </div>
  );
}

export default Home
