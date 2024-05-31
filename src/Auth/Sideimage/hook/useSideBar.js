import { useEffect, useState } from 'react';
import one from '/src/assets/Cover.png';
import two from '/src/assets/2147626522.jpg'
import three from '/src/assets/2148817043.jpg'
const images = [
    one,
    one,
    one
  ];
  


export const useSideBar = () =>{
    const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // 3 minutes

    return () => clearInterval(interval);
  }, []);


  return{
    images,
    currentIndex,
    setCurrentIndex,
  }
}