import React from 'react'
import { useTaskManagement } from '../hook/useTaskManagement';
import { Button } from '@/components/ui/button';
import TaskButton from './TaskButton';
const Task = () => {
  const {taskAssigned, isloading, handleCompleteTask,  } = useTaskManagement();
  // if(isloading){
  //   return(
  //     <div className="flex items-center justify-center min-h-screen bg-white-100">
  //   <div className="relative flex space-x-2">
  //     <div className="w-4 h-4 bg-red-500 rounded-full animate-bounce delay-100"></div>
  //     <div className="w-4 h-4 bg-red-500 rounded-full animate-bounce delay-200"></div>
  //     <div className="w-4 h-4 bg-red-500 rounded-full animate-bounce delay-300"></div>
  //   </div>
  // </div>
  //   )
  // }
  return (
    <div>
      
      <h1 className='font-bold text-xl -mt-4'>Task</h1>
      
      <p className='text-sm text-semibold'>Showing data of all assigned Task</p>
      <div className="flex items-center p-2 border rounded-lg shadow-sm mt-2">
      <div className="flex-grow justify-center">
        <input
          type="text"
          placeholder="Search here..."
          className="w-[40%] p-2 border rounded-lg  ms-[30%]"
        />
      </div>
      
      {/* <button className="ml-2 p-2 bg-gray-200 rounded-lg hover:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 text-gray-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 4a2 2 0 012-2h3.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V19a2 2 0 01-2 2H5a2 2 0 01-2-2V4z"
          />
        </svg>
      </button>
      <button className="ml-2 p-2 bg-gray-200 rounded-lg hover:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 text-gray-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 10h16M4 14h16M4 18h16"
          />
        </svg>
      </button> */}
    </div>
   <h1 className='mt-2 font-bold'>Task({taskAssigned?.length})</h1>
   <div className='bg-white'>
   {
    taskAssigned?.map((task,i)=>{
    return(
    <div key={i} >
    <div className='items-center p-2 border rounded-lg shadow-xl mt-2'>
    {/* <h1>Project</h1> */}
    
    <h1 className='font-bold text-green-500 lg:text-xl md:text-xl sm:text-sm text-sm flex item-center justify-center' ><span className='text-black fon-bold'>Project Title: </span> &nbsp; {task?.project?.name}</h1>
    <p className='flex item-center justify-center '><span className='text-black font-bold'>Project Description: </span> &nbsp;{task?.project?.description}</p>
    <h1 className='font-xl font-bold text-red-500 mt-4'>The Task:</h1>
    <div className='lg:flex md:flex sm:flex block justify-around'>
    <div className='lg:flex md:flex sm:flex block justify-center item-center   lg:m-2 md:m-2 sm:m-1 m-0 lg:space-x-24 md:space-x-8 sm:space-x-4 space-x-1'>
      
    <h1 className='flex justify-center mt-2'> <span className='font-bold'>Title:</span> <br />{task?.name}</h1>
    <p className="flex justify-center item-center "><span className='font-bold'>Description:</span> <br />{task?.description}</p>
    </div>

    <div className='flex item-center justify-center lg:space-x-14 md:space-x-12 sm:space-x-8 space-x-2'>
      <div>
      <TaskButton taskId={task?._id} />
      </div>
      <div >
              <img className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden" src={task?.assignedBy?.image} alt="User Avatar" />
            </div>
    </div>
    </div>
  </div>
    </div>
    )
    })
   }
   </div>
    </div>
  )
}

export default Task
