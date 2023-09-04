import { useEffect, useState } from 'react';
import { useInputContext } from '../../context/useInputContext';
import { Task } from '../../types';
import AddTask from '../add-task/AddTask';
import TaskItem from '../task-item/TaskItem';

const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const { showInput } = useInputContext();
  const fetchTasks = async () => {
    const getTasks = await fetch('http://localhost:5000/tasks');
    const data = await getTasks.json();
    return data;
  };

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  const onDelete = (taskId: number) => {
    const deleteTask = async () => {
      await fetch(`http://localhost:5000/tasks/${taskId}`, {
        method: 'DELETE',
      });
    };
    deleteTask();
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
  };

  const onAddTask = async (task: Task) => {
    const data = await fetch(`http://localhost:5000/tasks`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(task),
    });
    const addedTask = await data.json();
    setTasks([...tasks, addedTask]);
  };

  return (
    <>
      {showInput && <AddTask onAddTask={onAddTask} />}
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onDelete={onDelete} />
      ))}
    </>
  );
};

export default Tasks;
