import { Button } from '@/components/ui/button'
import { useCreatedProject } from '../hook/useCreatedProject';
import React from 'react';
const TitleDescription = () => {
 const { handleDeleteProject, userProject,noProjectYet } = useCreatedProject()
 if(noProjectYet){
  return <div>Empty</div>
 }
  return (
    
      <div className='space-y-2'>
       {
       
        userProject?.map((project, i)=>{
      return(
        <div key={i} className="p-4  w-[95%] mx-auto bg-white rounded-xl shadow-md space-y-1">

        <p className='float-right text-green-600'>{project?.startDate.slice(0,10)}</p>
      
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
      <Button onClick={() => handleDeleteProject(project?._id) }className="text-white bg-red-600 lg:ms-[87%] md:ms-[87%] sm:ms-[87%]">Delete</Button>
    </div>
      )
        })
       }
     
      </div>

  );
};

export default TitleDescription;

