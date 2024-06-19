import { UserRequest, publicRequest } from "@/Shared/API/Request";
import { toast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const useAddTask = () => {
    const [eachProject, setEachProject] = useState(); 
    const navigate = useNavigate();
    const [loading, setloading] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [user, setUser] = useState();
    const [isDelete, setIsDelete] = useState(false);
    
    const handleAddTask = (project) => {
        console.log("Project before navigate:", project);
        setEachProject(project);
        console.log(project, 'hello');
        navigate('/Mainpage/AddTask', { state: { project } });
    };
    
    const handleCreateTask = async(useProject) =>{
        setloading(true)
        if (!message.value || !taskName.value) {
            toast({
                title: 'Hi',
                description: 'Please Fill All Destails',
              });
        }
        const data = {
            name : taskName.value,
            description : message.value,
            project : useProject?._id
        }
        console.log(data);
        try {
            const res = await UserRequest().post('/createTask', data)
      console.log(res);
      toast({
        title: "✔️✔️✔️",
        description: "Task Creating Successfully",
      });
        } catch (error) {
            console.log(error);
        }
        finally{
            setloading(false)
        }
    }

    const getTasks = async (projectId) => {
      setloading(true)
        try {
            const res = await publicRequest.get(`/tasks/${projectId}`);
            setTasks(res?.data?.tasks);
            
        } catch (error) {
            console.error(error);
            if (error?.response?.data?.message === "No tasks found for this project") {
                toast({
                    title: 'Error',
                    description: 'No tasks found for this project',
                });
            }else{
                toast({
                title: 'Error',
                description: 'Failed to fetch tasks',
            });
            }
            

        } 
        finally{
          setloading(false)
        }
    };
    const handleDeleteTask = async (ID) => {
        try {
          console.log(ID);
          const res = await publicRequest.delete(`/deleteTask/${ID}`);
          console.log(res);
          toast({
            title: "✔️✔️✔️",
            description: "Project Deleted Successfully",
          });
        } catch (error) {
          console.error("Error deleting task:", error);
          toast({
            title: "❌❌❌",
            description: "Failed to delete the project",
          });
        }
      };


    const getAllUser = async () =>{
      const res = await UserRequest().get('/getAllUser')
      console.log(res?.data, 'meeeee');
      setUser(res?.data)
    }

      useEffect(() => {
        getAllUser()
      }, []);


    return {
    handleAddTask,
    eachProject,
    getTasks,
    handleCreateTask,
    loading,
    tasks,
    handleDeleteTask,
    isDelete,
    user
    };
};

