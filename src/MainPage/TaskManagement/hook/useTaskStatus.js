
// import { UserRequest } from '@/Shared/API/Request';
// import { useState } from 'react';

// const useTaskStatus = (taskId, initialStatus) => {
//   const [isComplete, setIsComplete] = useState(initialStatus);

//   const toggleTaskStatus = async () => {
//     try {
//       const response = await UserRequest().post(`/tasks/${taskId}/complete`)
//       console.log(response, 'hello');
//       if (!response) {
//         throw new Error('Failed to toggle task status');
//       }
//       console.log(response?.data);
//       // const data = await response.json();
//       setIsComplete(response?.data?.completed);
//       console.log(isComplete, 'hey');
//     } catch (err) {
//       console.error('Error:', err);
//     }
//   };

//   return [isComplete, toggleTaskStatus];
// };

// export default useTaskStatus;


import { UserRequest } from '@/Shared/API/Request';
import { useState } from 'react';

const useTaskStatus = (taskId, initialStatus) => {
  const [isComplete, setIsComplete] = useState(initialStatus);

  const toggleTaskStatus = async () => {
    try {
      const response = await UserRequest().post(`/tasks/${taskId}/complete`)
       console.log(response, 'hello');

      if (!response) {
        throw new Error('Failed to toggle task status');
      }
      setIsComplete(response?.data?.completed);
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return [isComplete, toggleTaskStatus];
};

export default useTaskStatus;
