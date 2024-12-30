import React from 'react'

const Hotseller = () => {
  return (
    <div className='text-center flex flex-col gap-8 max-w-screen-xl mx-auto mt-8 md:px-8 px-4'>
    <h2 className='font-semibold text-2xl'>HOTSELLER</h2>
    <div className='grid md:grid-cols-4 grid-cols-2 sm:gap-8 gap-2'>
      <div><img src='/Horizontal/7.jpg'></img></div>
      <div><img src='/Horizontal/9.jpg'></img></div>
      <div><img src='/Horizontal/2.jpg'></img></div>
      <div><img src='/Horizontal/5.jpg'></img></div>
    </div>
  </div>
  )
}

export default Hotseller
