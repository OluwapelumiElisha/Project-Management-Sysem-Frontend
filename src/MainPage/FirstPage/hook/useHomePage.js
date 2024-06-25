import { UserRequest, publicRequest } from "@/Shared/API/Request";
import { useEffect, useState } from "react";

export const useHomePage = () =>{

    const [userProject, setuserProject] = useState();
    const handleGetUserProject = async() => {
  
        // setisloading(true)
        try {
            const res = await UserRequest().get('/getUserProject')
            const data = res?.data?.getUserProjects
            console.log(data);
    //       if(data.length == 0){
    //   setnoProjectYet(true)
    //       }
          setuserProject(data)
        } catch (error) {
            console.log(error);
        }
        // finally{
        //   setisloading(false)
        // }
        
       }
    //    scroll part 
       function scroll(params) {
        if (params == 'Right') {
          document.getElementById('scroller').scrollBy({
            left: 100,
            behavior: 'smooth'
          })
    
        }
        else{
            document.getElementById('scroller').scrollBy({
              left: -100,
              behavior: 'smooth'
            })
          }
      }
    async  function handleCheckComplete() {
        const res = await publicRequest.get('/mark-completed')
        console.log(res);
      }

       useEffect(() => {
        handleGetUserProject();
      }, []);

       return{
        userProject, 
        scroll, handleCheckComplete
       }
    
}