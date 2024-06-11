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
                            <div className="p-4 w-[90%] bg-gray-400 m-auto rounded-xl shadow-md  relative"> 
                <div className=' flex flex-wrap gap-1 sm:gap-2 md:gap-2 lg:gap-3'>
            <h1 className='font-bold'>Title :</h1>
            <h1>{task?.name}</h1>
                </div>
                <div className=' flex flex-wrap gap-1 sm:gap-2 md:gap-2 lg:gap-3'>
                <h1 className='font-bold'>Description :</h1>
            <h1 >{task?.description}</h1>
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
