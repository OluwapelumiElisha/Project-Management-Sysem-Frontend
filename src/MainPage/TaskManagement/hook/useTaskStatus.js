import { UserRequest, publicRequest } from '@/Shared/API/Request';
import { useState, useEffect } from 'react';

const useTaskStatus = (taskId) => {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const savedStatus = localStorage.getItem(`task-${taskId}`);
    if (savedStatus) {
      setIsComplete(savedStatus === 'true');
    }
  }, [taskId]);

  const toggleTaskStatus = async() => {
    const newStatus = !isComplete;
    setIsComplete(newStatus);
    localStorage.setItem(`task-${taskId}`, newStatus);
    console.log(taskId);
    try {
        const response = await UserRequest().post(`/complete/${taskId}`)
        console.log(response, 'hello');
    } catch (error) {
        console.log(error)
    }
   





  };

  return { isComplete, toggleTaskStatus };
};

export default useTaskStatus;