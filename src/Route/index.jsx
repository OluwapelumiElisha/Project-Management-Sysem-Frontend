// import LoginForm from "@/Auth/Login/Component/LoginForm";
import ForgetPassWord from "@/Auth/FORGETPASSWORD";
import LoginForm from "@/Auth/Login/Component/LoginForm";
import OTP from "@/Auth/OTP";
import Sideimage from "@/Auth/Sideimage";
import SignupFrom from "@/Auth/Signup/Component/SignupFrom";
import AnalyticsCart from "@/MainPage/Analytics/Component/AnalyticsCart";
import CreateProject from "@/MainPage/CreateProject";
import CreatedProject from "@/MainPage/CreatedProject";
import Addtask from "@/MainPage/CreatedProject/Component/Addtask";
import Dashboard from "@/MainPage/Dashboard";
import Error from "@/MainPage/ErrorPage";
import FeedBackCom from "@/MainPage/FeedBack";
import FirstPage from "@/MainPage/FirstPage";
import OfflineAlert from "@/MainPage/OffLine";
import SettingPage from "@/MainPage/Settings";
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
        element: <LoginForm/>,
      },
      {
        path:"/SignUp",
        element: <SignupFrom/>
      },
      {
        path:"/Otp",
        element: <OTP/>
      },{
        path:'/ForgetPassword',
        element : <ForgetPassWord/>
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
        path:"Feedback",
        element: <FeedBackCom/>
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
          element: <SettingPage/>
        },
        {
          path: 'Analytics',
          element: <AnalyticsCart/>
        }

    ],
  },
  // {
  //   path: 'offline',
  //   element: <h1>Please Check ur Network....</h1>
  // }, 
  {
    path: "*",
    element: <Error />,
  },
])