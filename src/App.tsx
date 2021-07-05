import React, { FC, useState, ChangeEvent } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ITask } from "./Interfaces";
import TodoTask from "./components/TodoTask";

const App: FC = () => {
  const [task, setTask] = useState<String>("");
  const [deadline, setDeadline] = useState<Number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
    console.log(newTask);
    setTask("");
    setDeadline(0);
  };

  const completeTask = (taskNameToDelete: String): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName != taskNameToDelete;
      })
    );
  };

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Task..."
            name="task"
            value={task.toString()}
            onChange={handleChange}
          ></input>
          <input
            type="number"
            placeholder="Deadline (in Days)"
            name="deadline"
            value={Number(deadline)}
            onChange={handleChange}
          ></input>
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">
        {todoList.map((task: ITask, index: Number) => (
          <TodoTask
            key={Number(index)}
            task={task}
            completeTask={completeTask}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
