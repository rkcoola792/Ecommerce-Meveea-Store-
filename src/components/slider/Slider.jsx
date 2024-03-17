import React, { useState,useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./slider.scss"

const Slider = () => {
  const data = [
    "/img/pexels-royal-anwar-983497 (1).jpg",
    "/img/pexels-spencer-selover-428338.jpg",
    "/img/pexels-spencer-selover-428340.jpg",
    "/Horizontal/8.jpg",
    "/Horizontal/9.jpg",
    "/Horizontal/10.jpg",
  ];
  return (
    <div className="automaticSlider h-svh w-[75%] mx-auto object-cover rounded-md mt-8 overflow-hidden">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map(ele=><SwiperSlide><img src={ele} className='object-cover h-[px] '></img></SwiperSlide>)}
      </Swiper>
    </div>
  );
}

export default Slider
