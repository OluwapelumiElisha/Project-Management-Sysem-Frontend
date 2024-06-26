import React from 'react';
import useTaskStatus from '../hook/useTaskStatus';
import { Button } from '@/components/ui/button';

const TaskButton = ({ taskId, initialStatus }) => {
  const [isComplete, toggleTaskStatus] = useTaskStatus(taskId, initialStatus);

  return (
    <Button onClick={toggleTaskStatus} className="rounded-2xl">
      {isComplete ? '✔️' : 'Complete'}
    </Button>
  );
};

export default TaskButton;
