import React from 'react'
import ProjectCard from './dd';
import { LuMoreHorizontal } from "react-icons/lu";
import { Calendar } from '@/components/ui/calendar';
// import { CalendarDemo } from '@/Component/calendar';
const HomePage = () => {

  return (
    // Parent div 
    <div className='bg-pale-pink flex space-x-4'>
        {/* dashboard work  div*/}
      <div className='w-[70%]'>
      <div >
        <h1 className='-mt-6 font-bold lg:text-2xl md:text-xl sm:text-xl text-sm text-black'>Dashboard</h1>
        <p className='mt-1 text-gray-500'>Complete Overview of the Project System</p>
      </div> 
        {/*End dashboard work  */}
        {/* Recent Project div  */}
     <div className='mt-4'>
     <div className='bg-white p-4 rounded-lg shadow-md'>
      <div className='flex justify-between items-center mb-3'>
        <h1 className='font-bold'>Recent Project</h1>
        <p className='text-sm text-gray-500'><LuMoreHorizontal/></p>
      </div>
      <hr />
      {/* box that is display d box project */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      <div className="bg-gray-100 p-4 rounded-lg shadow-md mt-2">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold">ggggg</h2>
        <button className="text-gray-400 hover:text-gray-600">
        <LuMoreHorizontal/>
        </button>
      </div>
      <p className="text-gray-500 mt-2">Progress</p>
      <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
        <div ></div>
      </div>
      <div className="flex justify-between items-center mt-4 text-gray-500 text-sm">
        <span></span>
        <div className="flex -space-x-2">
          
        </div>
      </div>
    </div>
      </div>
      </div>
     </div>
     {/* End Recent Project div  */}
     {/* side calendar */}
      </div>
      <div className='bg-white p-4 rounded-lg shadow-md'>
      {/* <CalendarDemo/> */}
      {/* { CalendarDemo()} */}
      <Calendar/>
      </div>
    </div>
  )
}

export default HomePage
