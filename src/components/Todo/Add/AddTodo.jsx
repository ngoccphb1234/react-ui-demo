import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addTask} from "../../../redux/tasksSlice";
import "./styles.scss"

const AddTodo = () => {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const onSubmit = (event) => {
      event.preventDefault();
      if (value.trim().length === 0){
          alert("enter a task before adding !!");
          setValue("");
          return;
      }

      dispatch(
          addTask({
              task: value
          })
      );
      setValue("");
  };
  return (
      <div className="add-todo">
          <div className="div-add-task">

          <input type="text"
                className="task-input"
                 placeholder="Add task"
                 value={value}
                 onChange={(event) => setValue(event.target.value)}
          />
              <button className="task-button" onClick={onSubmit}>Add</button>
          </div>
      </div>
  )
};

export default AddTodo;