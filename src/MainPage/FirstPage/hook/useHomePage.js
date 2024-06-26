import { UserRequest, publicRequest } from "@/Shared/API/Request";
import { useEffect, useState } from "react";

export const useHomePage = () =>{
  const [allAssignedTasks, setAllAssignedTasks] = useState(0);
  const [allCompletedTasks, setAllCompletedTasks] = useState(0);
  const [projectTasks, setProjectTasks] = useState([]);
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
          // setuserProject(data)
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
      const taskSummary = async () => {
        try {
          const res = await UserRequest().get("/task-summary");
          const response = res?.data;
  
          
        
        } catch (error) {
          console.error("Error fetching task summary:", error);
        }
      };
    const handlegetAllProjectInfo = async() => {
      // getting all project colllection and task collection 
        try {
        const res = await UserRequest().get('/getuiuiut')
        console.log(res?.data);
        const response = res?.data
        setuserProject(response)

          // getting total task assignedTo a user 
        const getAllAssignedTo = userProject?.flatMap(project => 
          project?.tasks?.map(task => task?.assignedTo?.length || 0) || []);
      
      const totalAssignedTo = getAllAssignedTo.reduce((total, length) => total + length, 0);

      // console.log(totalAssignedTo, 'gggg');
        setAllAssignedTasks(totalAssignedTo)
        // getting total task Completed 
        const getAllComplete = userProject?.flatMap(project => 
          project?.tasks?.map(task => task?.assignedTo?.completed))
          console.log(getAllComplete, 'hello');
          const totaldone = getAllComplete?.reduce((total, length)=> total + length, 0)
          // console.log(totaldone);
          setAllCompletedTasks(totaldone)
          const aaa = userProject?.map((el)=>{
            return el?.tasks?.map((el)=>{
              return el?.assignedTo?.map((el)=>{
                // if (el?.completed === true) {
                //   console.log(e);
                // }
                // else{
                //   console.log('ff');
                // }
                let gg = el?.completed === true
                console.log(gg?.length);
              })
            })
          })
          console.log(aaa);
        } catch (error) {
          console.log(error);
        }
      }
       useEffect(() => {
        handleGetUserProject();
        taskSummary()
      }, []);

       return{
        userProject, 
        scroll, 
        allAssignedTasks,
        allCompletedTasks,
        projectTasks,
        handlegetAllProjectInfo
       }
    
}