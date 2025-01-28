// import React, { useEffect, useState } from 'react';
import one from '/src/assets/Cover.png';
import { useSideBar } from '../hook/useSideBar';


const Nav = () => {
  const { images, currentIndex, setCurrentIndex,} = useSideBar()

  return (
   
        <div className="flex w-[100%] lg:w-[50%] md:w-[45%] sm:w-[100%] h-screen bg-red-700">
      <div className="relative w-[100%] h-full overflow-hidden shadow-lg">
        <div
          className="absolute top-0 left-0 w-[300%] h-full flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100 / 3}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className="lg:w-[50%] md:w-[35%] w-[45%] h-[] sm:w-[100%] object-contain"
            />
          ))}
        </div>
      </div>
    </div>
 
  
  );
}

export default Nav;
