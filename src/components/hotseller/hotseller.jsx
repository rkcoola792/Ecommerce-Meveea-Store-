import React from 'react'

const Hotseller = () => {
  return (
    <div className='text-center flex flex-col gap-8 max-w-screen-xl mx-auto mt-8 px-8'>
    <h2 className='font-semibold text-2xl'>HOTSELLER</h2>
    <div className='grid grid-cols-4 gap-8'>
      <div><img src='/Horizontal/7.jpg'></img></div>
      <div><img src='/Horizontal/9.jpg'></img></div>
      <div><img src='/Horizontal/2.jpg'></img></div>
      <div><img src='/Horizontal/5.jpg'></img></div>
    </div>
  </div>
  )
}

export default Hotseller
