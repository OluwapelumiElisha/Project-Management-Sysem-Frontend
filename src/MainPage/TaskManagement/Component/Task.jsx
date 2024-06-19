import React from 'react'
import { useTaskManagement } from '../hook/useTaskManagement';
const Task = () => {
  const { getTasksAssignedToUser,taskAssigned } = useTaskManagement();
  taskAssigned?.map((el,i)=>{
    return{
      el
    }
  })
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
   <h1 className='mt-2 font-bold'>Task({el})</h1>
    </div>
  )
}

export default Task
