import { Button } from '@/components/ui/button';
import useTaskStatus from '../hook/useTaskStatus';

const TaskButton = ({ taskId,  }) => {
    const { isComplete, toggleTaskStatus } = useTaskStatus(taskId);

  return (
    <Button onClick={toggleTaskStatus} className="rounded-2xl">
      {isComplete ? 'Done' : 'Complete'}
    </Button>
    
  );
};

export default TaskButton;