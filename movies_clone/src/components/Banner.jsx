import React from 'react'
import image from './img4.jpg'

function Banner() {
  return (
    <>
  
    <div className={`bg-[url(${image})] h-[40vh] md:h-[60vh] bg-center bg-cover flex items-end justify-center`}>
       <div className="text-3xl text-white p-4 bg-gray-900 w-full flex justify-center bg-opacity-50">
        Spider-Man : No Way Home
       </div>
    </div>
  
    </>
  )
}

export default Banner