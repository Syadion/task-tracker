import { useState } from "react";

const EditTask = ({task, index, taskList, setTaskList}) => {
    const [editModal,  setEditModal] = useState(false);
    const [projectName, setProjectName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    
    const handleInput = e => {
        const {name, value} = e.target;

        if (name === "projectName") setProjectName(value)
        if (name === "taskDescription") setTaskDescription(value)
        
    }
    const handleUpdate = e =>  {
        e.preventDefault();
        let taskIndex = taskList.indexOf(task);
        taskList.splice(taskIndex, 1);
        setTaskList(
            [...taskList,{projectName, taskDescription}]
        );
        setEditModal(false);
    }

    return(
        <>
        <button
        onClick={() => setEditModal(true)}
        >
            Edit
        </button>
        {editModal ? (
        <>
            <div className="App"><div>
                <h3>Edit Task</h3>
                <button
                onClick={() => 
                    setEditModal(false)}
                >
                    X
                </button>
            </div>

            <form>
                <div>
                <label>
                    Project Name
                </label>
                <input 
                id = "project-name"
                name = "projectName"
                type = "text"
                placeholder="Project name"
                value={projectName}
                onChange={handleInput}
                required
                />
                </div>
                <div>
                <label>
                    Task Description
                </label>
                <textarea 
                id = "task-description"
                name="taskDescription"
                rows="3"
                type = "text"
                placeholder="Task description"
                value={taskDescription}
                onChange={handleInput}
                required
                />
                </div>
            </form>
            <div>
                <button
                onClick={handleUpdate}>
                    Update Task
                </button>
            </div>
            </div>
        </>
        ) : null}
        </>
    )
}

export default EditTask