// import React from 'react'
// import { useAddTask } from '../hook/useAddTask'
// import { useLocation } from 'react-router-dom';
// import { PlusIcon } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// const Addtask = () => {
//     const { eachProject, handleAddTask, addInputField, inputFields, logValues, setInputFields, handleCreateTask, loading} = useAddTask()
//     const location = useLocation();
//     const project = location.state.project;
    

//   return (
//     <div>
//         <h1 className='flex  justify-center text-xl text-black font-bold mb-2'>Add Task</h1>
//       <div className="p-4 w-[95%]  bg-white rounded-xl shadow-md space-y-1">
//             <h1 className='text-black text-xl font-bold '>Title:</h1>
//             <p className='mb-2 text-red-600'>{ project?.name}</p> 
//             <h1 className='text-black text-xl font-bold '>Description:</h1>
//             <p className='text-red-600'>{ project?.description}</p>
//             <div>
                
       
    
//         </div>

//       </div>

//     </div>
//   )
// }

// export default Addtask

import React, { useEffect, useState } from 'react';
import { useAddTask } from '../hook/useAddTask';
import { useLocation } from 'react-router-dom';
import { PlusIcon, InfoIcon, XIcon } from 'lucide-react'; // Assuming InfoIcon is your info icon
import { Button } from '@/components/ui/button';

const Addtask = () => {
    const { eachProject, inputFields, handleCreateTask, loading, getTasks, tasks} = useAddTask();
    const location = useLocation();
    const { state } = useLocation()
    const project = location.state.project;
    const [isBoxOpen, setIsBoxOpen] = useState(false);

    useEffect(() => {
        if (state?.project) {
            getTasks(state.project?._id);
        }
    }, [state]);
    if (!tasks || tasks.length === 0) {
        <div>No Task Yet</div>
   }
    return (
        <>
        <div className="flex flex-col items-center">
            <h1 className='text-xl text-black font-bold mb-2'>Add Task</h1>
            <div className="p-4 w-[95%] bg-white rounded-xl shadow-md space-y-4 relative">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className='text-black text-xl font-bold'>Title:</h1>
                        <p className='mb-2 text-red-600'>{project?.name}</p>
                        <h1 className='text-black text-xl font-bold'>Description:</h1>
                        <p className='text-red-600'>{project?.description}</p>
                    </div>
                    <Button onClick={() => setIsBoxOpen(!isBoxOpen)} className='-mt-20 p-2 rounded-full hover:bg-red-600'>
                        <InfoIcon className="w-6 h-6" />
                    </Button>
                </div>
                {isBoxOpen && (
                    <div className="bg-gray-100 rounded-lg p-4 mt-4 absolute top-full right-0">
                        <p>This is a small box content.</p>
                    </div>
                )}
                <div>
       <div>
       <form >
        <div class="mb-4">
            <label for="name" class="block text-gray-700 font-bold mb-2">Name:</label>
            <input type="text" id="taskName" name="name" class="shadow appearance-none border rounded w-[60%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Task Name"/>
        </div>
        <div class="mb-4">
            <label for="message" class="block text-gray-700 font-bold mb-2">Description:</label>
            <textarea id="message" name="message" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Description"></textarea>
        </div>
        <div class="flex items-center justify-between">
                 <Button onClick={() => handleCreateTask(project)} className='px-4 py-2 bg-red-600 p-3 mt-4' disabled={loading} type="submit">
                        {loading ? "Creating..." : "Create Task"}
                    </Button>
        </div>
        </form>
       </div>
              
                </div>
            </div>
           
            
        </div>

        <h1 className='mt-4 mb-4 text-red-600 flex justify-center font-bold lg:text-xl md:text-xl sm:text-sm text-xs'>All Task For Dis Project</h1>
        
            <div className="p-4 w-[95%] bg-white rounded-xl shadow-md space-y-4 relative"> 
                {
                    tasks.map((task,i)=>{
                        return(
                            <div className="p-4 w-[90%] bg-white m-auto rounded-xl shadow-2xl relative"> 
                            {/* <Button>hello</Button> */}
                <div className=' flex flex-wrap gap-1 sm:gap-2 md:gap-2 lg:gap-3'>
            <h1 className='font-bold'>Title :</h1>
            <h1>{task?.name}</h1>
                </div>
                <div className=' flex flex-wrap gap-1 sm:gap-2 md:gap-2 lg:gap-3'>
                <h1 className='font-bold'>Description :</h1>
            <h1 >{task?.description}</h1>

            
                </div>
                <h1 className='mt-4 font-bold text-xl'>Assign Task</h1>
                <div class="flex flex-col mt-8">
    <div class="py-2 px-4 sm:px-6 lg:px-8">
        <div class="inline-block min-w-full align-middle border-b border-gray-200 shadow sm:rounded-lg overflow-x-auto">
            <table class="min-w-full md:w-auto">
                <thead class="hidden lg:table-header-group md:hidden">
                    <tr class="md:table-row">
                        <th class="w-20 px-2 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                            Name
                        </th>
                        <th class="w-20 px-2 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                            Title
                        </th>
                        <th class="w-20 px-2 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                            Status
                        </th>
                        <th class="w-20 px-2 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                            Role
                        </th>
                        <th class="w-20 px-2 py-3 border-b border-gray-200 bg-gray-50"></th>
                    </tr>
                </thead>
                <tbody class="block md:table-row-group">
                    <tr class="block md:table-row bg-white">
                        <td class="block md:table-cell w-full md:w-20 px-2 py-4 whitespace-no-wrap border-b border-gray-200">
                            <div class="flex items-center">
                                <div class="flex-shrink-0 w-10 h-10">
                                    <img class="w-10 h-10 rounded-full"
                                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                         alt=""/>
                                </div>
                                <div class="ml-4">
                                    <div class="text-sm font-medium leading-5 text-gray-900">John Doe</div>
                                    <div class="text-sm leading-5 text-gray-500">john@example.com</div>
                                </div>
                            </div>
                        </td>
                        <td class="block md:table-cell w-full md:w-20 px-2 py-4 whitespace-no-wrap border-b border-gray-200">
                            <div class="text-sm leading-5 text-gray-900">Software Engineer</div>
                            <div class="text-sm leading-5 text-gray-500">Web dev</div>
                        </td>
                        <td class="block md:table-cell w-full md:w-20 px-2 py-4 whitespace-no-wrap border-b border-gray-200">
                            <span class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">Active</span>
                        </td>
                        <td class="block md:table-cell w-full md:w-20 px-2 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                            Owner
                        </td>
                        <td class="block md:table-cell w-full md:w-20 px-2 py-4 text-sm font-medium leading-5 text-right whitespace-no-wrap border-b border-gray-200">
                            <button class="text-indigo-600 hover:text-indigo-900">Assign</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>






                </div>
                        )
                        
                    })
                }
            
            </div>
        </>
        
       
       
    );
}

export default Addtask;
