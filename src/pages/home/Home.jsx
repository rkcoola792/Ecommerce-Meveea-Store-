import React from 'react'
import Slider from '../../components/slider/Slider'
import FeaturedProducts from '../../components/featuredProducts/FeaturedProducts'
const Home = () => {
  return (
    <div>
      <Slider/>
      <FeaturedProducts title="Featured" />
      <FeaturedProducts title="Trending" />
    </div>
  )
}

export default Home
