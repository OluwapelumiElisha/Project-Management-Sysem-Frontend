import axios from "axios"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export const useCurrentUser = ()=>{
    const [currentUser, setcurrentUser] = useState();
    const token = localStorage.getItem("token");
   const navigate = useNavigate()
   async function getCurrentUser() {
     try {
    //      const res = await axios.get(
    //     "http://localhost:4002/checkAuth",
    //     { headers: { Authorization: "Bearer " + token } }
    //   );
    const res = await UserRequest().get("/checkAuth");
      setcurrentUser(res?.data)
      console.log(res);
     } catch (error) {
         console.log(error);
     }
   }
   function handleLogout() {
    localStorage.removeItem("token");
    setcurrentUser(null);
    navigate("/auth/login");
    // window.location.reload();
  }
   useEffect(() => {
    getCurrentUser();
}, []);

return{
    currentUser, 
    handleLogout,
}
}