import { useState } from "react";
import "./App.css";
import Task from "./components/Task";
import TaskAdd from "./components/TaskAdd";

let i = 0;

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    setTasks([
      ...tasks,
      {
        id: i++,
        title: text,
      },
    ]);
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <div className="card w-75 Tasks">
        <div className="card-body">
          <h5 className="card-title">To-do list</h5>
          <TaskAdd handleAdd={addTask} />
          <ul className="list-group">
            {tasks.map((task) => (
              <Task key={task.id} task={task} handleDelete={deleteTask} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
