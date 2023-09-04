import { useState } from 'react';
import { Task } from '../../types';
import * as S from './AddTask.styles';

type AddTaskProps = {
  onAddTask: (task: Task) => Promise<void>;
};

const AddTask = ({ onAddTask }: AddTaskProps) => {
  const [formGroup, setFormGroup] = useState({
    text: '',
    day: '',
    reminder: false,
  });
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormGroup((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    onAddTask(formGroup);
    setFormGroup({
      text: '',
      day: '',
      reminder: false,
    });
  };

  return (
    <S.FormWrapper className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="task">Task</label>
        <input
          type="text"
          name="text"
          id="text"
          value={formGroup.text}
          placeholder="Add Task"
          onChange={onChange}
        />
      </div>
      <div className="form-control">
        <label htmlFor="day">Day and Time</label>
        <input
          type="text"
          name="day"
          id="day"
          value={formGroup.day}
          placeholder="Add Day and Time"
          onChange={onChange}
        />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="reminder">Set Reminder</label>
        <input
          type="checkbox"
          checked={formGroup.reminder}
          name="reminder"
          id="reminder"
          onChange={onChange}
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </S.FormWrapper>
  );
};

export default AddTask;
