// // import React, { useEffect, useState } from 'react';
// import one from '/src/assets/Cover.png';
// import { useSideBar } from '../hook/useSideBar';


// const Nav = () => {
//   const { images, currentIndex, setCurrentIndex,} = useSideBar()

//   return (
   
//         <div className="flex w-[100%] lg:w-[50%] md:w-[45%] sm:w-[100%] h-screen bg-red-700">
//       <div className="relative w-[100%] h-full overflow-hidden shadow-lg">
//         <div
//           className="absolute top-0 left-0 w-[300%] h-full flex transition-transform duration-1000 ease-in-out"
//           style={{ transform: `translateX(-${currentIndex * 100 / 3}%)` }}
//         >
//           {images.map((image, index) => (
//             <img
//               key={index}
//               src={image}
//               alt={`Slide ${index}`}
//               className="w-[50%] h-full sm:w-[100%] object-contain"
//             />
//           ))}
//         </div>
//       </div>
//     </div>
 
  
//   );
// }

// export default Nav;


import React from 'react';
import one from '/src/assets/Cover.png';
import { useSideBar } from '../hook/useSideBar';

const Nav = () => {
  const { images, currentIndex } = useSideBar();

  return (
    <div className="flex justify-center items-center w-[100%] lg:w-[50%] md:w-[50%] sm:w-[100%] h-screen bg-red-700">
      <div className="relative w-full lg:w-1/2 md:w-3/4 sm:w-full h-full overflow-hidden shadow-lg">
        <div
          className="absolute top-0 left-0 flex w-full h-full transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover sm:object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nav;

