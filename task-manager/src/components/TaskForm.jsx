import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasksSlice";


const TaskForm = () => {
    const [task, setTask] = useState(''); //Holds the task input
    const dispatch = useDispatch();

    const handleSubmit = () => {
        if (task.trim()) {
            dispatch(addTask(task)); // send task to store
            setTask(''); // Clear input
        }
    }

    return (
        <div>
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter Task" />

            <button onClick={handleSubmit}>Add Task </button>
        </div>
    )
}

export default TaskForm