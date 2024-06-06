import { UserRequest, publicRequest } from "@/Shared/API/Request";
import { toast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";

export const useCreatedProject = () =>{
  const [userProject, setuserProject] = useState();
  const [isdelete, setisdelete] = useState();
  const [noProjectYet, setnoProjectYet] = useState(false);
  const handleGetUserProject = async() => {
  
    // alert()
    try {
        const res = await UserRequest().get('/getUserProject')
        const data = res?.data?.getUserProjects
      
      if(data.length == 0){
  setnoProjectYet(true)
  // demo.textContent = "No Project Yet"
  // alert()
      }
      setuserProject(data)
    } catch (error) {
        console.log(error);
    }
   }

   const handleDeleteProject = async (id) =>{
    
    console.log(id);
    
    const res = await publicRequest.delete(`/deleteUserProject/${id}`)
    console.log(res);
    
    // console.log(isdelete);
    toast({
      title: "✔️✔️✔️",
      description: "Project Deleted Successfully",
    });
    // setnoProjectYet(true)
    setisdelete(Math.random()*29992)
   }
  //  useEffect(() => {
  //   handleGetUserProject();
  //   // handleDeleteProject()
  // }, []);

  useEffect(() => {
    handleGetUserProject();
    handleDeleteProject();
  }, [isdelete]);

   return{
    // handleGet,
    // handleGetUserProject,
    userProject,
    handleDeleteProject,
    noProjectYet
   }

}



