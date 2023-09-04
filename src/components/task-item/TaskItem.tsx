import { Task } from '../../types';
import { FaTimes } from 'react-icons/fa';
import * as S from './TaskItem.styles';
import { useState } from 'react';

type TaskItemProps = {
  task: Task;
  onDelete: (taskId: number) => void;
};
const TaskItem = ({ task, onDelete }: TaskItemProps) => {
  const [taskReminder, setTaskReminder] = useState(task.reminder);
  const onTaskReminder = async () => {
    setTaskReminder(!taskReminder);
    await fetch(`http://localhost:5000/tasks/${task.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...task, reminder: !taskReminder }),
    });
  };
  return (
    <S.TaskWrapper
      className={`task ${taskReminder && 'reminder'}`}
      onClick={onTaskReminder}
    >
      <h3 style={{ display: 'flex', justifyContent: 'space-between' }}>
        {task.text} <FaTimes color="red" onClick={() => onDelete(task.id!)} />
      </h3>
      <p>{task.day}</p>
    </S.TaskWrapper>
  );
};

export default TaskItem;
