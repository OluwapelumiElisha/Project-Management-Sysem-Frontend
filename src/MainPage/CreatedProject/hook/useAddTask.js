

import { UserRequest, publicRequest } from "@/Shared/API/Request";
import { toast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";




export const useAddTask = () => {
    const [eachProject, setEachProject] = useState(); 
    const navigate = useNavigate();
    // const [inputFields, setInputFields] = useState(['']);
    const [loading, setloading] = useState(false);
    const [tasks, setTasks] = useState([]);
    
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
        // setLoading(true);
        // console.log(projectId);
        try {
            const res = await publicRequest.get(`/tasks/${projectId}`);
            setTasks(res?.data?.tasks);
            // console.log(res, 'hello');
            console.log(res, 'hyyyyyy');
        } catch (error) {
            console.error(error);
            toast({
                title: 'Error',
                description: 'Failed to fetch tasks',
            });
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

