
import React from "react";
import { LuMoreHorizontal } from "react-icons/lu";
import { Calendar } from "@/components/ui/calendar";
import { useHomePage } from "../hook/useHomePage";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi2";
import tabler from "@/assets/tabler_circles.png";
import iconassigned from "@/assets/icon.png";
import done from "@/assets/icon (1).png";
import { useTaskManagement } from "@/MainPage/TaskManagement/hook/useTaskManagement";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  const { userProject, scroll, allAssignedTasks, allCompletedTasks ,projectTasks, handlegetAllProjectInfo} = useHomePage();
  const { taskAssigned } = useTaskManagement();

  return (
    <div className="bg-pale-pink flex space-x-4">
      <Button onClick={handlegetAllProjectInfo}>tresting</Button>
    <div className="lg:w-[70%] md:w-full sm:w-full w-full">
      
      <div>
        
        <h1 className="lg:-mt-6 md:-mt-5 sm:-mt-4 -mt-5 font-bold lg:text-2xl md:text-xl sm:text-xl text-xl text-black bg-pale-pink">
          Dashboard
        </h1>
        <p className="mt-1 text-gray-500">
          Complete Overview of the Project System
        </p>
      </div>

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
                        <h2 className="font-semibold">{project?.name}</h2>
                        <button className="text-gray-400 hover:text-gray-600">
                          <LuMoreHorizontal />
                        </button>
                      </div>
                     
                      {/* <p>{project?.tasks?.map(task => task?.assignedTo?.length) || []}</p> */}
                      <p className="text-gray-500 mt-2">Progress</p>
                      <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
                        <div
                          className="bg-blue-500 h-full rounded-full"
                          // style={{ width: `${completionPercentage}%` }}
                        ></div>
                      </div>
                      <p>
                        {project?.tasks?.length}
                      </p>
                      {/* <div className="flex justify-between items-center mt-4 text-gray-500 text-sm">
                        <span>Label</span>
                        <div className="flex -space-x-2">
                          <img
                            className="w-6 h-6 rounded-full border-2 border-white"
                            src="/avatar1.png"
                            alt="Avatar 1"
                          />
                          <img
                            className="w-6 h-6 rounded-full border-2 border-white"
                            src="/avatar2.png"
                            alt="Avatar 2"
                          />
                        </div>
                      </div> */}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md mt-4 lg:w-[75%] md:w-[75%] sm:w-[80%] w-[90%] m-auto">
        <div className="flex justify-between items-center mb-3">
          <h1 className="font-bold">Task Summary</h1>
          <p className="text-sm text-gray-500">
            <LuMoreHorizontal />
          </p>
        </div>
        <div className="flex lg:space-x-8 md:space-x-6 sm:space-x-4 space-x-2 justify-center item-center">
          <div className="bg-red-600 rounded-xl p-4 text-center lg:w-[25%] md:w-[25%] sm:w-[30%] w-[30%] cursor-pointer pt-8 pb-8">
            <div className="border w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center ">
              <img src={tabler} alt="" />
            </div>
            <div className="text-white font-semibold lg:text-xl md:text-sm sm:text-xs text-xs">Projects</div>
            <div className="text-white text-lg font-bold">{userProject?.length}</div>
          </div>
          <div className="bg-yellow-200 rounded-xl p-4 text-center lg:w-[25%] md:w-[25%] sm:w-[30%] w-[30%] cursor-pointer pt-8 pb-8">
            <div className="w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center ">
              <img src={iconassigned} alt="" />
            </div>
            <div className="text-white font-semibold lg:text-xl md:text-sm sm:text-xs text-xs">Assigned</div>
            <div className="text-white text-lg font-bold">{allAssignedTasks}</div>
          </div>
          <div className="bg-gray-200 rounded-xl p-4 text-center lg:w-[25%] md:w-[25%] sm:w-[30%] w-[30%] cursor-pointer pt-8 pb-8">
            <div className="border w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center ">
              <img src={done} alt="" />
            </div>
            <div className="text-white font-semibold lg:text-xl md:text-sm sm:text-xs text-xs">Done</div>
            <div className="text-white text-lg font-bold">{allCompletedTasks}</div>
          </div>
        </div>
      </div>
    </div>
    <div className="w-[28%]">
      <Calendar className="bg-white p-2 rounded-lg shadow-md lg:flex md:hidden sm:hidden hidden" />
      <div className="bg-white p-4 rounded-lg shadow-md mt-6">
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
