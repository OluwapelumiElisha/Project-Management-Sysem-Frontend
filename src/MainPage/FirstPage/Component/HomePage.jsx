import React, { useState } from "react";
import { LuMoreHorizontal } from "react-icons/lu";
import { Calendar } from "@/components/ui/calendar";
import { useHomePage } from "../hook/useHomePage";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi2";
import tabler from "@/assets/tabler_circles.png";
import iconassigned from "@/assets/icon.png";
import done from "@/assets/icon (1).png";
import { useTaskManagement } from "@/MainPage/TaskManagement/hook/useTaskManagement";
import { Link } from "react-router-dom";
import loaderIcon from "@/assets/Exclude.png";

const HomePage = () => {
  const [styles, setStyles] = useState([]);
  const {
    userProject,
    scroll,
    allAssignedTasks,
    allCompletedTasks,
    projectTasks,
    handlegetAllProjectInfo,
    isloading,
  } = useHomePage();
  const { taskAssigned } = useTaskManagement();
  // dis is use to account d progress bar percentage 
  const newStyles = userProject?.flatMap((project) => {
    const totalAssigned = project?.tasks
      ?.flatMap((el) => el?.assignedTo?.length || 0)
      .reduce((acc, length) => acc + length, 0);

    const totalCompleted = project?.tasks
      ?.flatMap(
        (task) =>
          task?.assignedTo?.filter((person) => person?.completed === true)
            .length || 0
      )
      .reduce((acc, length) => acc + length, 0);

    const widthPercentage =
      totalCompleted > 0 ? (totalCompleted / totalAssigned) * 100 : 0;

    return {
      width: `${widthPercentage}%`,
    };
  });
  // Loading..... 
  if (isloading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center animate-bounce">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor" >
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046a1 1 0 00-1.8 0L5.433 10H2a1 1 0 000 2h4.07l-2.588 7.963a1 1 0 001.8.774L14.567 12H18a1 1 0 000-2h-4.07l2.588-7.963a1 1 0 00-1.8-.774L11.3 1.046z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <h2 className="text-xl font-semibold text-gray-700">
            Loading Projects...
          </h2>
          <p className="text-gray-500">
            Please wait while we load your projects.
          </p>
          <div className="w-64 mt-4 bg-gray-200 rounded-full">
            <div className="h-2 bg-red-600 rounded-full progress-bar"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-pale-pink lg:flex space-x-4  md:flex space-x-4 sm:block block">
      {/* first div  */}
      <div className="lg:w-[68%] md:w-full sm:w-full w-full">

        <div>
          <h1 className="lg:-mt-6 md:-mt-5 sm:-mt-4 -mt-5 font-bold lg:text-2xl md:text-xl sm:text-xl text-xl text-black bg-pale-pink">
            Dashboard
          </h1>
          <p className="mt-1 text-gray-500">
            Complete Overview of the Project System
          </p>
        </div>
      {/* All Project box...  */}
        <div className="mt-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-3">
              <h1 className="font-bold">Recent Project</h1>
              <p className="text-sm text-gray-500">
                <LuMoreHorizontal />
              </p>
            </div>
            <hr />

            <div className="relative">
              <style>
                {`
                .scroll-container::-webkit-scrollbar {
                  display: none;
                }
              `}
              </style>
              <div className="flex justify-between items-center mt-2">
                <HiChevronLeft
                  className="w-6 h-6 cursor-pointer"
                  onClick={() => scroll("Left")}
                />
                <HiChevronRight
                  onClick={() => scroll("Right")}
                  className="w-6 cursor-pointer h-6"
                />
              </div>
              <div className="overflow-hidden">
                <div
                  id="scroller"
                  className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-2 scroll-container"
                >
                  {userProject?.map((project, i) => {
                    return (
                      <div
                        key={i}
                        className="bg-gray-50 p-4 rounded-lg shadow-md mt-2 flex-shrink-0 lg:w-[32.5%] md:w-[48%] sm:w-[64%] w-[100%] snap-center"
                      >
                        <div className="flex justify-between items-center">
                          <h2 className="font-semibold">
                            {project?.name?.slice(0, 20)}
                          </h2>
                          <button className="text-gray-400 hover:text-gray-600">
                            <LuMoreHorizontal />
                          </button>
                        </div>
                        <p className="text-gray-500 mt-2">Progress</p>
                        <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
                          <div
                            className="bg-red-600 h-full rounded-full"
                            style={newStyles[i]}
                          ></div>
                        </div>
                        <p>
                          <span className="text-green-600">All Tasks</span>{" "}
                          <br />
                          {project?.tasks?.length}
                        
                        </p>
                       
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
                  {/* Task Summary  */}
        <div className="bg-white p-4 rounded-lg shadow-md mt-4 lg:w-[75%] md:w-[75%] sm:w-[80%] w-[90%] m-auto">
          <div className="flex justify-between items-center mb-3">
            <h1 className="font-bold">Task Summary</h1>
            <p className="text-sm text-gray-500">
              <LuMoreHorizontal />
            </p>
          </div>
          <div className="flex lg:space-x-8 md:space-x-6 sm:space-x-4 space-x-2 justify-center item-center">
            {/* First box ---> Project  */}
            <div className="shadow bg-red-600 rounded-xl p-4 text-center lg:w-[25%] md:w-[25%] sm:w-[30%] w-[30%] cursor-pointer pt-8 pb-8">
              <div className="border w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center ">
                <img src={tabler} alt="" />
              </div>
              <div className="text-white font-semibold lg:text-xl md:text-sm sm:text-xs text-xs">
                Projects
              </div>
              <div className="text-white text-lg font-bold">
                {userProject?.length}
              </div>
            </div>
            {/* Second box ---> Assigned  */}
            <div className="bg-yellow-200 rounded-xl p-4 text-center lg:w-[25%] md:w-[25%] sm:w-[30%] w-[30%] cursor-pointer pt-8 pb-8">
              <div className="w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center ">
                <img src={iconassigned} alt="" />
              </div>
              <div className=" font-semibold lg:text-xl md:text-sm sm:text-xs text-xs text-black">
                Assigned
              </div>
              <div className="text-black text-lg font-bold">
                {allAssignedTasks}
              </div>
            </div>
            {/* Thrid box ---> Done  */}
            <div className="bg-gray-200 rounded-xl p-4 text-center lg:w-[25%] md:w-[25%] sm:w-[30%] w-[30%] cursor-pointer pt-8 pb-8">
              <div className="border w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center ">
                <img src={done} alt="" />
              </div>
              <div className="text-green-600 font-semibold lg:text-xl md:text-sm sm:text-xs text-xs">
                Done
              </div>
              <div className=" text-lg font-bold text-green-600">
                {allCompletedTasks}
              </div>
            </div>
          </div>
        </div>
      </div>  
      {/* side div  */}
      <div className="lg:w-[28%] md:w-[28%] sm:w-[95%] w-[95%]">
        <Calendar className="bg-white p-2 rounded-lg shadow-md lg:flex md:hidden sm:hidden hidden" />
        <div className="bg-white p-4 rounded-lg shadow-md mt-6 ">
          <div className="flex justify-between items-center mb-3">
            <h1 className="font-bold">
              Task Today<span className="font-semibold">()</span>
            </h1>
            <Link to={"/Mainpage/TaskManagement"}>
              <div className="flex">
                <p className="text-sm text-black">See All</p>
                <span>
                  <HiChevronRight className="cursor-pointer mt-0" />
                </span>
              </div>
            </Link>
          </div>
          <div>
            {taskAssigned?.length > 0 ? (
              <div>
                {taskAssigned.map((el, i) => (
                  <div key={i}>
                    {i === 0 && <h2 className="font-bold"> {el.name}</h2>}
                  </div>
                ))}
              </div>
            ) : (
              <p>No tasks available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
