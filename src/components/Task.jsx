import EditTask from "./EditTask";


const Task = ({task, index, taskList, setTaskList}) => {
    
    return (
        <>
            <p>{Task.projectName}</p>
            <EditTask task={task} index={index} taskList={taskList} setTaskList={setTaskList}/>

            <p>{Task.taskDescription}</p>
            <button>Delete</button>


        </>
    )
}

export default Task;