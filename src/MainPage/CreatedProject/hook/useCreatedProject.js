import { UserRequest, publicRequest } from "@/Shared/API/Request";
import { toast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";

export const useCreatedProject = () =>{
  const [userProject, setuserProject] = useState();
  const [isdelete, setisdelete] = useState();
  const [noProjectYet, setnoProjectYet] = useState(false);
  const [isloading, setisloading] = useState(false);
  const handleGetUserProject = async() => {
  
    setisloading(true)
    try {
        const res = await UserRequest().get('/getUserProject')
        const data = res?.data?.getUserProjects
      
      if(data.length == 0){
  setnoProjectYet(true)
      }
      setuserProject(data)
    } catch (error) {
        console.log(error);
    }
    finally{
      setisloading(false)
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
    setisdelete(Math.random()*29992)
   };

  useEffect(() => {
    handleGetUserProject();
    // handleDeleteProject();
  }, [isdelete]);

  const formatDate = (date) =>{
    // userProject.map((el)=>{
    // const date = el?.startDate
    // console.log(date);
    const protime = new Date(date);
    const now = new Date();
    const diffMs = now - protime;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000)
    if(diffHours < 1){
      return  `${diffMins} minues ago`
    }else if (diffDays < 1){
      return `${diffHours} minues ago`
    }else{
      return `${diffDays} minues ago`
    }
   
   
  }

  useEffect(() => {
    // handleGetUserProject();
    handleDeleteProject();
  }, [isdelete]);
   return{
    userProject,
    handleDeleteProject,
    noProjectYet,
    formatDate,
    isloading
   }

}



