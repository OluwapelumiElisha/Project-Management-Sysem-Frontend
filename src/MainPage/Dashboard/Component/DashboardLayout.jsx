import React, { useState } from "react";
import logo from "@/assets/Exclude.png";
import menu from "@/assets/menu_9441572.png";
import del from "@/assets/delete_10097645.png";
import "/src/App.css";
import { useFirstList } from "../utils/useFirstList";
import { Link, NavLink } from "react-router-dom";
import { useSecondList } from "../utils/useSecondList";
import { useCurrentUser } from "@/Shared/hook/useCurrentUser";

const DashboardLayout = ({ children }) => {
  const [isToggle, setisToggle] = useState(false);
  const { currentUser } = useCurrentUser();

  return (
    <div className="dashboard-layout">
      <header className="fixed top-0 left-0 right-0 z-10 bg-white shadow-md p-1 flex justify-between items-center">
        <div className="flex lg:ms-6 md:ms-6 ms-1 items-center lg:space-x-5 md:space-x-5 sm:space-x-3 space-x-1">
          <img src={logo} alt="PMS Logo" className="h-8 w-8" />
          <span className="font-semibold lg:text-xl md:text-sm text-sm">
            Projectify
          </span>
        </div>
        <div className="flex me-10 items-center w-[50%] space-x-3">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search here..."
              className="pl-10 bg-white shadow rounded-md w-full h-10 pr-4 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M18 10.5a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
              />
            </svg>
          </div>
          <Link to={"/Mainpage/TaskManagement"}>
            <button className="relative">
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 11-6 0m6 0H9"
                />
              </svg>
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-400"></span>
            </button>
          </Link>
          <button>
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16h6m-7 3h8a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </button>

          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
              <img src={currentUser?.image} alt="Your Picture" />
            </div>
            <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white bg-green-500"></span>
          </div>
        </div>
      </header>

      <div className="flex w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%]  mt-16">
        {!isToggle && (
          <img
            src={menu}
            className="w-8 h-8 md:hidden "
            onClick={() => setisToggle(!isToggle)}
            alt=""
          />
        )}
        <div
          className={`fixed top-0 left-0 z-0 bg-white shadow-2xl h-full lg:block md:block lg:w-[20%] w-[15%] p-4 overflow-y-auto ${
            isToggle ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="mt-16 space-y-36">
              <ul className="lg:space-y-6 md:space-y-5 sm:space-y-1 space-y-0 ">
                {useFirstList.map((items, i) => (
                  <li
                    key={i}
                    className="block py-2 -px-4 text-black md:text-sm sm:text-xs text-xs lg:text-base font-sans rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500 "
                  >
                    <NavLink
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-500" : ""
                      }
                      to={items.path}
                    >
                      <div className="hover: flex lg:gap-4 md:gap-1 sm:gap-3 md:-ms-3 lg:ms-0 sm:ms-0 ms-0 relative group">
                        <img
                          src={items.sideicon}
                          className="!w-6 font-extrabold !h-6 block sm-hidden lg:!w-5 lg:!h-5 md:w-4 md:h-4 sm:w-5 sm:h-5 imgicon"
                          alt=""
                        />
                        <div className="lg:block md:block sm:hidden hidden -mt-1">
                          {items.name}
                        </div>
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-black text-white text-xs rounded py-1 px-2 z-10">
                          {items.name}
                        </div>
                      </div>
                    </NavLink>
                  </li>
                ))}
              </ul>
              {/* <ul className="lg:space-y-6 md:space-y-5 sm:space-y-1 space-y-0 -mt-10">
                {useSecondList.map((items, i) => (
                  <li key={i} className="block py-2 -px-4 text-black sm:text-xs text-xs lg:text-base font-sans rounded md:bg-transparent md:text-black md:p-0 dark:text-white md:dark:text-blue-500">
                    <NavLink className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "text-red-500" : "")} to={items.path}>
                      <div className=" hover: flex lg:gap-4 md:gap-1 sm:gap-3 md:-ms-3 lg:ms-0 sm:ms-0 ms-0">
                        <img src={items.sideicon} className="w-[20px] block sm-hidden lg:w-5 lg:h-6 md:w-4 md:h-4 sm:w-5 sm:h-5 imgicon" alt="" />
                        <div className="lg:block md:block sm:hidden hidden">{items.name}</div>
                        <span className='hover'>
                          {items.name}
                        </span>
                      </div>
                    </NavLink>
                  </li>
                ))}
              </ul> */}
              <ul className="lg:space-y-6 md:space-y-5 sm:space-y-1 space-y-0 -mt-10">
                {useSecondList.map((items, i) => (
                  <li
                    key={i}
                    className="block py-2 -px-4 text-black sm:text-xs text-xs lg:text-base font-sans rounded md:bg-transparent md:text-black md:p-0 dark:text-white md:dark:text-blue-500"
                  >
                    <NavLink
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-500" : ""
                      }
                      to={items.path}
                    >
                      <div className="hover: flex lg:gap-4 md:gap-1 sm:gap-3 md:-ms-3 lg:ms-0 sm:ms-0 ms-0 relative group">
                        <img
                          src={items.sideicon}
                          className="w-[30px] block sm-hidden lg:w-5 lg:h-4 md:w-4 md:h-4 sm:w-7 sm:h-7 imgicon"
                          alt=""
                        />
                        <div className="lg:block md:block sm:hidden hidden">
                          {items.name}
                        </div>
                        {/* <span>
            {items.name}
          </span> */}
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-black text-white text-xs rounded py-1 px-2 z-10">
                          {items.name}
                        </div>
                      </div>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-auto mb-4">
              {isToggle && (
                <img
                  src={del}
                  onClick={() => setisToggle(!isToggle)}
                  className="lg:hidden md:hidden mb-4 ml-auto w-[100%] h-4"
                  alt=""
                />
              )}
            </div>
          </div>
        </div>

        <section
          className={`overflow-y-auto mt-21 p-4 ${
            isToggle ? "w-full" : "w-full lg:ml-[20%] md:ml-[15%]"
          }`}
        >
          <div className="z-0">

          {children}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DashboardLayout;
