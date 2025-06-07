import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/tasksSlice";

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks.tasks)

    const dispatch = useDispatch();


    return (
        <ul>
            {
                tasks.map((task) => (
                    <li key={task.id}>
                        {task.text}

                        <button onClick={() => dispatch(deleteTask(task.id))}>
                            Delete
                        </button>
                    </li>
                ))
            }
        </ul>
    )
}

export default TaskList;