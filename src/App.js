import { useState } from "react";
import AddTask from "./components/AddTask";
import Task from "./components/Task";
import './App.css';

function App() {
  const [taskList, setTaskList] = useState([]);
  console.log(taskList);
  return (
    <>
    <div className="App">
    <h1>Task Tracker</h1>
    <p>Hi there</p>
    <div className="flex">
    <p>Click </p>
    <AddTask taskList={taskList} setTaskList={setTaskList}/>
    <p> to add a new task</p>
    </div>

    <h2>Tasks:</h2>
    {taskList.map((task, i) =>
    <>
    <div className="task-card">
    <Task key={i} task={task} index={1} taskList={taskList} setTaskList={setTaskList}/>
    <p>{task.projectName}</p>
    <p>{task.taskDescription}</p>
    </div>
    </>
    )}
    </div>
    </>
  );
}

export default App;
