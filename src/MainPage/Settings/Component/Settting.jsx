import { useCurrentUser } from '@/Shared/hook/useCurrentUser'
import React, { useRef } from 'react'
import { FaPlus } from 'react-icons/fa';
const Settting = () => {
    console.log();
    const { currentUser } = useCurrentUser();
    const fileInputRef = useRef(null);

    const handleIconClick = () => {
      fileInputRef.current.click();
    };
  return (
    <>
      <h1 className='text-4xl text-center text-zinc-600'>Setting Page</h1>
      {/* <h2 className='text-2xl flex justify-center text-zinc-600'>Settings</h2> */}
      <div className="relative flex justify-center mt-8">
      <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden relative">
        <img src={currentUser?.image} alt="Your Picture" />
        <div
          onClick={handleIconClick}
          className="absolute bottom-2 right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer"
        >
          <FaPlus className="text-white" />
        </div>
      </div>
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
      />
    </div>
    
    </>
  )
}

export default Settting
