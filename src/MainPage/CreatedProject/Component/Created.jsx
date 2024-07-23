
// import { Button } from '@/components/ui/button';
// import { useCreatedProject } from '../hook/useCreatedProject';
// import React, { useState } from 'react';
// import { useAddTask } from '../hook/useAddTask';
// import '/src/App.css'
// import { Link } from 'react-router-dom';
// import { HiSearch } from "react-icons/hi";
// const TitleDescription = () => {
//   const { handleDeleteProject, userProject, noProjectYet, formatDate, isloading } = useCreatedProject();
//   const { handleAddTask } = useAddTask()
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const filteredProjects = userProject?.filter(project =>
//     project?.name?.toLowerCase().includes(searchTerm.toLowerCase())
//   );
//   if (noProjectYet) {
//     return (
//       <div className="flex mt-20 flex-col items-center justify-center h-full p-4 bg-white ">
//       <svg className="w-16 h-16 mb-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v2a2 2 0 002 2h2a2 2 0 002-2v-2m-4-8v6m0-6a4 4 0 10-8 0v6a4 4 0 008 0zm-2 10a4 4 0 108 0v-6a4 4 0 00-8 0z" />
//       </svg>
//       <h2 className="text-2xl font-semibold text-gray-700">No projects available</h2>
//       <p className="text-gray-500 sm:text-sm text-xs lg:text-xl md:text-sm">Start by creating a new project to see it listed here.</p> <br /> 
//      <Link to={'/Mainpage/CreateProject'}> <Button className="bg-red-600">Create a Project</Button></Link>
//   </div>
//     )
//   }
//   if (isloading) {
//     return ( 
//     //   <div className="flex items-center justify-center min-h-screen bg-gray-100">
//     //   <div className="dual-ring-spinner">
//     //     <div className="w-16 h-16 border-4 border-red-500 border-dashed rounded-full animate-spin"></div>
//     //     <div className="absolute top-0 left-0 w-16 h-16 border-4 border-red-600 border-solid rounded-full animate-spin-reverse"></div>
//     //   </div>
//     // </div>
//     <div className="flex items-center justify-center min-h-screen bg-white">
//     <div className="flex space-x-2">
//       <div className="w-4 h-12 bg-red-500 animate-bounce"></div>
//       <div className="w-4 h-12 bg-red-500 animate-bounce delay-150"></div>
//       <div className="w-4 h-12 bg-red-500 animate-bounce delay-300"></div>
//     </div>
//   </div>
//     );
//   }
//   return (
    
//     <div className="space-y-2 " >
//       <h1 className='flex justify-center font-bold text-xl -mt-4 text-red-600'>Project Created</h1>
//       <div className='flex justify-center  w-[40%] m-auto '>
//         <input className='border rounded-l-xl w-[80%] p-1 -top-0  focus:outline-none' type="text" placeholder='Search' 
//         value={searchTerm}
//         onChange={handleSearchChange}
//         />
//         {/* <HiSearch className='top-2 left-2 absolute ' /> */}
//         <Button className='rounded-l-sm'>Search</Button>
//         {/* <h1>hjshjshj</h1> */}
//       </div>
//       {userProject?.map((project, i) => {
//         return (
//           <div key={i} className="">
//             <p className='font-bold'>{i + 1}</p>
//             <div
//               className="p-4 w-[95%]  bg-white rounded-xl shadow-md space-y-1"
//             >
              
//               <p className="float-right text-green-600 lg:text-base md:text-sm sm:text-sm text-xs">
//                 {new Intl.DateTimeFormat(undefined, {
//                   year: "numeric",
//                   month: 'long',
//                   day: "numeric",
//                   hour: 'numeric',
//                   minute: "numeric",
//                   second: "numeric",
//                   hour12: true,
//                 }).format(new Date(project?.startDate))}
//               </p>
//                 {/* <p>{formatDate(project?.startDate)}</p> */}
//               <div className="space-y-1 flex flex-wrap gap-1 sm:gap-2 md:gap-2 lg:gap-4">
//                 <h1 className="text-xl font-bold text-black">
//                   Title:
//                 </h1>
//                 <p className="text-black font-bold">
//                 {filteredProjects?.map((project, i) => (
//           <div key={i}>
//             <h2>{project.name}</h2>
//             {/* Add more project details here */}
//           </div>
//         ))}
//                 </p>
//               </div>
//               <div className="space-y-1 flex flex-wrap gap-1 sm:gap-2 md:gap-2 lg:gap-4">
//                 <h1 className="text-xl font-bold text-black">
//                   Description:
//                 </h1>
//                 <p className="text-black font-bold text-sm">
//                   {project?.description}
//                 </p>
//               </div>
//               <div className="flex justify-between w-full">
//                 <Button onClick={() => handleAddTask(project)}>Add Task</Button>
//                 <Button
//                   onClick={() => handleDeleteProject(project?._id)}
//                   className="text-white bg-red-600"
//                 >
//                   Delete
//                 </Button>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default TitleDescription;





import { Button } from '@/components/ui/button';
import { useCreatedProject } from '../hook/useCreatedProject';
import React, { useState } from 'react';
import { useAddTask } from '../hook/useAddTask';
import '/src/App.css';
import { Link } from 'react-router-dom';

const TitleDescription = () => {
  const { handleDeleteProject, userProject, noProjectYet, formatDate, isloading } = useCreatedProject();
  const { handleAddTask } = useAddTask();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProjects = userProject?.filter(project =>
    project?.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (noProjectYet) {
    return (
      <div className="flex mt-20 flex-col items-center justify-center h-full p-4 bg-white ">
        <svg className="w-16 h-16 mb-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v2a2 2 0 002 2h2a2 2 0 002-2v-2m-4-8v6m0-6a4 4 0 10-8 0v6a4 4 0 008 0zm-2 10a4 4 0 108 0v-6a4 4 0 00-8 0z" />
        </svg>
        <h2 className="text-2xl font-semibold text-gray-700">No projects available</h2>
        <p className="text-gray-500 sm:text-sm text-xs lg:text-xl md:text-sm">Start by creating a new project to see it listed here.</p> <br /> 
        <Link to={'/Mainpage/CreateProject'}> <Button className="bg-red-600">Create a Project</Button></Link>
      </div>
    );
  }

  if (isloading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="flex space-x-2">
          <div className="w-4 h-12 bg-red-500 animate-bounce"></div>
          <div className="w-4 h-12 bg-red-500 animate-bounce delay-150"></div>
          <div className="w-4 h-12 bg-red-500 animate-bounce delay-300"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <h1 className='flex justify-center font-bold text-xl -mt-4 text-red-600'>Project Created</h1>
      <div className='flex justify-center w-[40%] m-auto'>
        <input
          className='border rounded-xl w-[80%] p-1 focus:outline-none'
          type="text"
          placeholder='Search'
          value={searchTerm}
          onChange={handleSearchChange}
        />
        {/* <Button className='rounded-l-sm'>Search</Button> */}
      </div>
      {filteredProjects?.map((project, i) => (
        <div key={i} className="p-4 w-[95%] bg-white rounded-xl shadow-md space-y-1">
          <p className='font-bold'>{i + 1}</p>
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
        </div>
      ))}
    </div>
  );
};

export default TitleDescription;

