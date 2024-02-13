import React, { useState } from 'react'
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./slider.scss"
const Slider = () => {
  const [currentSlide,setCurrentSlide]=useState(0)
  const data=["public/img/pexels-royal-anwar-983497 (1).jpg","public/img/pexels-spencer-selover-428338.jpg","public/img/pexels-spencer-selover-428340.jpg"]

  function prevSlide(){
    setCurrentSlide(currentSlide===0?2:(prev)=>prev-1)
  }

    function nextSlide() {
      setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
    }


  return (
    <div className="slider w-screen">
      <div className="slider-images flex" style={{transform:`translateX(-${currentSlide*100}vw)`}} >
      <img src={data[0]} alt="" />
      <img src={data[1]} alt="" />
      <img src={data[2]} alt="" />
      </div>

      <div className="slider-buttons-container">
        <div className="left-icon icon" onClick={prevSlide}>
          <ArrowBackIcon></ArrowBackIcon>
        </div>
        <div className="right-icon icon" onClick={nextSlide}>
          <ArrowForwardIcon></ArrowForwardIcon>
        </div>
      </div>
    </div>
  );
}

export default Slider
