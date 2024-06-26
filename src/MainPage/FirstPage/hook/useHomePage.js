import { UserRequest, publicRequest } from "@/Shared/API/Request";
import { useEffect, useState } from "react";

export const useHomePage = () =>{
  const [allAssignedTasks, setAllAssignedTasks] = useState(0);
  const [allCompletedTasks, setAllCompletedTasks] = useState(0);
  const [projectTasks, setProjectTasks] = useState([]);
    const [userProject, setuserProject] = useState();
    // const [style, setStyle] = useState();
    const [isloading, setisloading] = useState(false);
    const handleGetUserProject = async() => {
        
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
          setisloading(true)
        const res = await UserRequest().get('/getuiuiut')
        console.log(res?.data);
        const response = res?.data
        setuserProject(response)
          // getting total task assignedTo a user 
      if (!response) {
        console.error("userProject is undefined or null");
    } else {
        const getAllAssignedTo = response.flatMap(project => {
            if (!project || !project.tasks) {
                console.warn("Project or project.tasks is undefined or null", project);
                return [];
            }
            return project.tasks.map(task => {
                if (!task || !task.assignedTo) {
                    console.warn("Task or task.assignedTo is undefined or null", task);
                    return 0;
                }
                return task.assignedTo.length || 0;
            });
        });
    
        const totalAssignedTo = getAllAssignedTo.reduce((total, length) => total + length, 0);
        console.log(totalAssignedTo, 'hello');
        setAllAssignedTasks(totalAssignedTo)
    }
          // getting total task Completed 
          if (!response) {
            console.error("userProject is undefined or null");
        } else {
            const getAllAssignedTo = response.flatMap(project => {
                if (!project || !project.tasks) {
                    console.warn("Project or project.tasks is undefined or null", project);
                    return [];
                }
        
                return project.tasks.flatMap(task => {
                    if (!task || !task.assignedTo) {
                        console.warn("Task or task.assignedTo is undefined or null", task);
                        return [];
                    }
        
                    return task.assignedTo.map(assigned => ({
                        completed: assigned?.completed || false
                    }));
                });
            });
        
            const completedCount = getAllAssignedTo.filter(assigned => assigned?.completed)?.length;
            const notCompletedCount = getAllAssignedTo.filter(assigned => !assigned?.completed)?.length;
        
            console.log(`Completed: ${completedCount}`);
            setAllCompletedTasks(`${completedCount}`)
            console.log(`Not Completed: ${notCompletedCount}`);
        }
       
        } catch (error) {
          console.log(error);
        }
        finally{
          setisloading(false)
        }
      }
       useEffect(() => {
        handleGetUserProject();
        taskSummary()
        handlegetAllProjectInfo()
      }, []);

       return{
        userProject, 
        scroll, 
        allAssignedTasks,
        allCompletedTasks,
        projectTasks,
        handlegetAllProjectInfo, 
        isloading
       }
    
}