import React, { useEffect, useState } from "react";
import { useAddTask } from "../hook/useAddTask";
import { Link, useLocation } from "react-router-dom";
import { PlusIcon, InfoIcon, XIcon } from "lucide-react"; // Assuming InfoIcon is your info icon
import { Button } from "@/components/ui/button";
import left from "/src/assets/left_10933550 (1).png";
import { useTaskManagement } from "@/MainPage/TaskManagement/hook/useTaskManagement";

const Addtask = () => {
  const {
    eachProject,
    inputFields,
    handleCreateTask,
    loading,
    getTasks,
    tasks,
    reaction,
    handleDeleteTask,
    user,
    handledisplaydescription
  } = useAddTask();
  const { handleClick, isAssigned, setIsAssigned} = useTaskManagement()
  const location = useLocation();
  const { state } = useLocation();
  const project = location.state.project;
  const [isBoxOpen, setIsBoxOpen] = useState(false);
  

  useEffect(() => {
    if (state?.project) {
      getTasks(state.project?._id);
    }
  }, [state]);

  // if (!tasks || tasks.length === 0) {
  //   return <div>No Task Yet</div>;
  // }

  return (
    <>
      <Link to={"/Mainpage/ProjectCreated"}>
        <img className="w-[6%] -mt-6 ms- cursor-pointer" src={left} alt="" />
      </Link>
      <div className="flex flex-col items-center">
        <h1 className="text-xl text-black font-bold mb-2">Add Task</h1>
        <div className="p-4 w-[95%] bg-white rounded-xl shadow-md space-y-4 relative">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-black text-xl font-bold">Title:</h1>
              <p className="mb-2 text-red-600">{project?.name}</p>
              <h1 className="text-black text-xl font-bold">Description:</h1>
              <p className="text-red-600">{project?.description}</p>
            </div>
            <Button
              onClick={() => setIsBoxOpen(!isBoxOpen)}
              className="-mt-20 p-2 rounded-full hover:bg-red-600"
            >
              <InfoIcon className="w-6 h-6" />
            </Button>
          </div>
          {isBoxOpen && (
            <div className="bg-gray-100 rounded-lg p-4 mt-4 absolute top-full right-0">
              <p className="text-bold">Project Info</p>
            </div>
          )}
          <div>
            <div>
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Name:
                  </label>
                  <input
                    type="text"
                    id="taskName"
                    name="name"
                    className="shadow appearance-none border rounded w-[60%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Task Name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Description:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Description"
                  ></textarea>
                </div>
                <div className="flex items-center justify-between">
                  <Button
                    onClick={() => handleCreateTask(project)}
                    className="px-4 py-2 bg-red-600 p-3 mt-4"
                    disabled={loading}
                    type="submit"
                  >
                    {loading ? "Creating..." : "Create Task"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <h1 className="mt-4 mb-4 text-red-600 flex justify-center font-bold lg:text-xl md:text-xl sm:text-sm text-xs">
        All Task For Dis Project
      </h1>

      <div className="p-4 w-[95%] bg-white rounded-xl shadow-md space-y-4 relative ">
        {tasks.map((task, i) => {
          return (
            <div
              key={i}
              className="p-4 w-[90%] bg-white m-auto rounded-xl shadow-2xl relative"
            >
              <div className=" flex flex-wrap gap-1 sm:gap-2 md:gap-2 lg:gap-3">
                <h1 className="font-bold">Title :</h1>
                <h1>{task?.name}</h1>
              </div>
              <div className=" flex flex-wrap gap-1 sm:gap-2 md:gap-2 lg:gap-3">
                <h1 className="font-bold">Description :</h1>
                <h1>{task?.description}</h1>
              </div>
              <h1 className="mt-4 font-bold text-xl">Assign Task</h1>
              <div className="flex flex-col mt-8">
                <div className="py-2 px-4 sm:px-6 lg:px-8">
                  <div className="inline-block min-w-full align-middle border-b border-gray-200 shadow sm:rounded-lg overflow-x-auto">
                    <table className="min-w-full md:w-auto">
                      <thead className="hidden lg:table-header-group md:hidden">
                        <tr className="md:table-row">
                          <th className="w-20 px-2 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                            Name
                          </th>
                          <th className="w-20 px-2 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                            Title
                          </th>
                          <th className="w-20 px-2 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                            Status
                          </th>
                          <th className="w-20 px-2 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                            Role
                          </th>
                          <th className="w-20 px-2 py-3 border-b border-gray-200 bg-gray-50"></th>
                        </tr>
                      </thead>
                      <tbody className="block md:table-row-group">
                        {user?.map((user, i) => {
                          return (
                            <tr key={i} className="block md:table-row bg-white">
                              <td className="block md:table-cell w-full md:w-20 px-2 py-4 whitespace-no-wrap border-b border-gray-200">
                                <div className="flex items-center">
                                  <div className="flex-shrink-0 w-10 h-10">
                                    <img
                                    onClick={handledisplaydescription}
                                      className="w-10 h-10 rounded-full"
                                      src={user?.image}
                                      alt=""
                                    />
                                  </div>
                                  <div className="ml-4">
                                    <div className="text-sm font-medium leading-5 text-gray-900">
                                      {user?.userName}
                                    </div>
                                    <div className="text-sm leading-5 text-gray-500 hidden lg:block md:hidden sm:hidden">
                                      {user?.email}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="block md:table-cell w-full md:w-20 px-2 py-4 whitespace-no-wrap border-b border-gray-200">
                                <div className="text-sm leading-5 text-gray-900">
                                  {user?.title}
                                </div>
                              </td>
                              <td className="block md:table-cell w-full md:w-20 px-2 py-4 whitespace-no-wrap border-b border-gray-200">
                                <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                                  Active
                                </span>
                              </td>
                              <td className="block md:table-cell w-full md:w-20 px-2 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                                Owner
                              </td>
                              <td className="block md:table-cell w-full md:w-20 px-2 py-4 text-sm font-medium leading-5 text-right whitespace-no-wrap border-b border-gray-200">
                                <button
                                  className={`px-4 py-2 font-semibold text-white rounded ${
                                    isAssigned[`${task._id}-${user._id}`]
                                      ? "bg-gray-600"
                                      : "bg-green-600"
                                  }`}
                                  onClick={() =>
                                    handleClick(user._id, task._id)
                                  }
                                  disabled={
                                    isAssigned[`${task._id}-${user._id}`]
                                  } // Disable the button if the task is already assigned
                                >
                                  {isAssigned[`${task._id}-${user._id}`]
                                    ? "Assigned"
                                    : "Assign"}
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
                <Button
                  onClick={() => handleDeleteTask(task?._id)}
                  className="text-white sm:ms-[75%] lg:ms-[80%] ms-[55%] p-2 bg-red-600"
                >
                  Delete
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Addtask;
