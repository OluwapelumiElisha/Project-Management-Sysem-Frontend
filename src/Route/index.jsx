// import LoginForm from "@/Auth/Login/Component/LoginForm";
import LoginForm from "@/Auth/Login/Component/LoginForm";
import OTP from "@/Auth/OTP";
import Sideimage from "@/Auth/Sideimage";
import SignupFrom from "@/Auth/Signup/Component/SignupFrom";
import CreateProject from "@/MainPage/CreateProject";
import CreatedProject from "@/MainPage/CreatedProject";
import Addtask from "@/MainPage/CreatedProject/Component/Addtask";
import Dashboard from "@/MainPage/Dashboard";
import FirstPage from "@/MainPage/FirstPage";
import SignOut from "@/MainPage/SignOut";
import TaskManagement from "@/MainPage/TaskManagement";
// import Sig
import { createBrowserRouter } from "react-router-dom";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Sideimage/>,
    children: [
      {
        index: true,
        element: <SignupFrom/>,
      },
      {
        path:"/Login",
        element: <LoginForm/>
      },
      {
        path:"/Otp",
        element: <OTP/>
      },{
        path:'/ForgetPassword',
        element : <h1>Coming Soon.</h1>
      }
    ],
  },
  {
    path: "/Mainpage",
    element: <Dashboard/>,
    children: [
      {
        index: true,
        element: <FirstPage/>,
      },

      {
        path:"TaskManagement",
        element: <TaskManagement/>
      },
      {
        path: "CreateProject",
        element: <CreateProject/>
      },
      {
        path:"File-Sharing",
        element: <h1>File-Sharing</h1>
      },
      {
      path: 'ProjectCreated',
      element: <CreatedProject/>
      },
      {
        path: 'AddTask',
        element: <Addtask/>
        },
        {
          path: 'Logout',  
          element: <SignOut/>
        },
        {
          path: 'settings',  
          element: <h1>Helllo</h1>
        }

    ],
  },
])