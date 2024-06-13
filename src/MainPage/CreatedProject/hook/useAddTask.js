

import { UserRequest, publicRequest } from "@/Shared/API/Request";
import { toast } from "@/components/ui/use-toast";
import { useState } from "react";
import { useNavigate } from "react-router-dom";




export const useAddTask = () => {
    const [eachProject, setEachProject] = useState(); 
    const navigate = useNavigate();
    const [loading, setloading] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [reaction, setreaction] = useState();
    
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
        } catch (error) {
            console.log(error);
        }
        finally{
            setloading(false)
        }
        // alert(inputFields)
    }

    const getTasks = async (projectId) => {
        try {
            const res = await publicRequest.get(`/tasks/${projectId}`);
            setTasks(res?.data?.tasks);
            console.log(res, 'hyyyyyy');
            setreaction(Math.r)
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
    };



    return {
    handleAddTask,
    eachProject,
    getTasks,
    handleCreateTask,
    loading,
    tasks
    };
};

