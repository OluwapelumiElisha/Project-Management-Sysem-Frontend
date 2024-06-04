// import LoginForm from "@/Auth/Login/Component/LoginForm";
import LoginForm from "@/Auth/Login/Component/LoginForm";
import OTP from "@/Auth/OTP";
import Sideimage from "@/Auth/Sideimage";
import SignupFrom from "@/Auth/Signup/Component/SignupFrom";
import CreateProject from "@/MainPage/CreateProject";
import Dashboard from "@/MainPage/Dashboard";
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
        element: <h1>ghhgghg</h1>,
      },

      {
        path:"TaskManagement",
        element: <h1>Task Management</h1>
      },
      {
        path: "CreateProject",
        element: <CreateProject/>
      },
      {
        path:"File-Sharing",
        element: <h1>File-Sharing</h1>
      },
    ],
  },
])