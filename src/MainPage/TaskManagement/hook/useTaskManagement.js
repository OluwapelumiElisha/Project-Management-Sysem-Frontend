import { UserRequest, publicRequest } from "@/Shared/API/Request";
import { useCurrentUser } from "@/Shared/hook/useCurrentUser";
import { toast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";

export const useTaskManagement = () =>{
  const [taskAssigned, settaskAssigned] = useState();
  const [isloading, setisloading] = useState(false);
  const { currentUser } = useCurrentUser();
    const [isAssigned, setIsAssigned] = useState(() => {
        // Load initial state from localStorage
        const savedAssignments = localStorage.getItem("assignments");
        return savedAssignments ? JSON.parse(savedAssignments) : {};
      });
    
      const handleClick = async(userId, taskId) => {
        const updatedAssignments = { ...isAssigned, [`${taskId}-${userId}`]: true };
        setIsAssigned(updatedAssignments);
        localStorage.setItem("assignments", JSON.stringify(updatedAssignments));
        try {
          const response = await publicRequest.put(`/tasks/${taskId}/assign`, { userId });
          console.log('Task assigned successfully:', response.data);
        } catch (err) {
          console.error('Error assigning task:', err);
        }
      }
      const getTasksAssignedToUser = async() =>{
        setisloading(true)
        try{
          const getTasks = await UserRequest().get('/taskAssignedToDisUser')
          console.log(getTasks)
          settaskAssigned(getTasks?.data?.tasks)
        }catch (error){
          console.log(error)
        }
        finally{
          setisloading(false)
        }
      }
      const handleCompleteTask = async(taskId)=>{
        console.log(task);
      }
      useEffect(() => {
        getTasksAssignedToUser();
      }, []);
      
      return {
        handleClick,
        isAssigned,
        setIsAssigned,
        // getTasksAssignedToUser,
        taskAssigned,
        isloading,
        handleCompleteTask
      }
} 