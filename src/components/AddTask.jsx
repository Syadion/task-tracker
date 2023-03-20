import { useState } from "react";

const AddTask = ({taskList, setTaskList}) => {
    const [addModal, setAddModal ] = useState(false);
    const [projectName, setProjectName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    
    const handleInput = e => {
        const {name, value} = e.target;

        if (name === "projectName") setProjectName(value)
        if (name === "taskDescription") setTaskDescription(value)
        
    }
    const handleAdd = e =>  {
        e.preventDefault();
        setTaskList(
            [...taskList,{projectName, taskDescription}]
        );
        setAddModal(false);
        setProjectName("");
        setTaskDescription("");
    }

    return(
        <>
        <button 
        className="btn-1"
        type="button"
        onClick={() => setAddModal(true)}
        >
            New
        </button>
        {addModal ? (
            <>
            <div className="App"><div>
                <h3>Add New Task</h3>
                <button
                onClick={() => setAddModal(false)}
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
                onClick={handleAdd}>
                    Add Task
                </button>
            </div>
            </div>
            </>
        ) : null}
        </>
    )
}

export default AddTask;