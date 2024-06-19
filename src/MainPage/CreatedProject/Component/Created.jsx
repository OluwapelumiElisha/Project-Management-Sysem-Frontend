
import { Button } from '@/components/ui/button';
import { useCreatedProject } from '../hook/useCreatedProject';
import React from 'react';
import { useAddTask } from '../hook/useAddTask';
import '/src/App.css'
const TitleDescription = () => {
  const { handleDeleteProject, userProject, noProjectYet, formatDate, isloading } = useCreatedProject();
  const { handleAddTask } = useAddTask()
  if (noProjectYet) {
    return <div>Empty</div>;
  }
  if (isloading) {
    return ( 
    //   <div className="flex items-center justify-center min-h-screen bg-gray-100">
    //   <div className="dual-ring-spinner">
    //     <div className="w-16 h-16 border-4 border-red-500 border-dashed rounded-full animate-spin"></div>
    //     <div className="absolute top-0 left-0 w-16 h-16 border-4 border-red-600 border-solid rounded-full animate-spin-reverse"></div>
    //   </div>
    // </div>
    <div className="flex items-center justify-center min-h-screen bg-white">
    <div className="flex space-x-2">
      <div className="w-4 h-12 bg-red-500 animate-bounce"></div>
      <div className="w-4 h-12 bg-red-500 animate-bounce delay-150"></div>
      <div className="w-4 h-12 bg-red-500 animate-bounce delay-300"></div>
    </div>
  </div>
//   <div className="flex items-center justify-center min-h-screen bg-gray-100">
//   <div className="relative w-20 h-20">
//     <div className="absolute top-0 left-0 w-20 h-20 border-4 border-solid border-red-500 border-t-transparent rounded-full animate-spin"></div>
//     <div className="absolute top-0 left-0 w-16 h-16 border-4 border-solid border-red-500 border-b-transparent rounded-full animate-spin-reverse"></div>
//     <div className="absolute top-0 left-0 w-12 h-12 border-4 border-solid border-red-500 border-l-transparent rounded-full animate-spin"></div>
//   </div>
// </div>



  //   <div className="flex items-center justify-center min-h-screen bg-gray-100">
  //   <div className="relative flex space-x-2">
  //     <div className="w-4 h-4 bg-red-500 rounded-full animate-bounce delay-100"></div>
  //     <div className="w-4 h-4 bg-red-500 rounded-full animate-bounce delay-200"></div>
  //     <div className="w-4 h-4 bg-red-500 rounded-full animate-bounce delay-300"></div>
  //   </div>
  // </div>
    );
  }
  return (
    
    <div className="space-y-2 " >

      {userProject?.map((project, i) => {
        return (
          <div key={i} className="">
            <div
              className="p-4 w-[95%]  bg-white rounded-xl shadow-md space-y-1"
            >
              <p className="float-right text-green-600 lg:text-base md:text-sm sm:text-sm text-xs">
                {new Intl.DateTimeFormat(undefined, {
                  year: "numeric",
                  month: 'long',
                  day: "numeric",
                  hour: 'numeric',
                  minute: "numeric",
                  second: "numeric",
                  hour12: true,
                }).format(new Date(project?.startDate))}
              </p>
                {/* <p>{formatDate(project?.startDate)}</p> */}
              <div className="space-y-1 flex flex-wrap gap-1 sm:gap-2 md:gap-2 lg:gap-4">
                <h1 className="text-xl font-bold text-black">
                  Title:
                </h1>
                <p className="text-black font-bold">
                  {project?.name}
                </p>
              </div>
              <div className="space-y-1 flex flex-wrap gap-1 sm:gap-2 md:gap-2 lg:gap-4">
                <h1 className="text-xl font-bold text-black">
                  Description:
                </h1>
                <p className="text-black font-bold text-sm">
                  {project?.description}
                </p>
              </div>
              <div className="flex justify-between w-full">
                <Button onClick={() => handleAddTask(project)}>Add Task</Button>
                <Button
                  onClick={() => handleDeleteProject(project?._id)}
                  className="text-white bg-red-600"
                >
                  Delete
                </Button>
              </div>
              {/* <Button>hello</Button>
              <Button
                onClick={() => handleDeleteProject(project?._id)}
                className="text-white bg-red-600 "
              >
                Delete
              </Button> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TitleDescription;
