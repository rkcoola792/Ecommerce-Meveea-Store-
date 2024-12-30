import React from "react";
import Slider from "../../components/slider/Slider";
import FeaturedProducts from "../../components/featuredProducts/FeaturedProducts";
import FeaturedCelebs from "../../components/Categories/FeaturedCelebs";
import { Link } from "react-router-dom";
import Social from "../../components/social/Social";
import DropWeek from "../../components/dropWeek/dropWeek";
import Hotseller from "../../components/hotseller/hotseller";
import NewArrival from "../../components/newArrival/newArrival";
import CustomOrder from "../../components/customOrder/customOrder";
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
      <DropWeek />
      <NewArrival />
      <CustomOrder/>
      <Hotseller />
    
    </div>
  );
};

export default Home;
