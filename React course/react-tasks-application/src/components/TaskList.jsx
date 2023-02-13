import {useContext} from 'react';
import TaskCard from './TaskCard';
import {TaskContext} from "../context/TaskContext"

function TaskList() {
    const {tasks} = useContext(TaskContext);

    if(tasks.length === 0) {
        return <h1 className = "text-white text-4xl font-bold text-center">No task found</h1>
    } else {
        return (
            <div className = "grid grid-cols-4 gap-2">
                {
                    tasks.map((task) => (
                        <TaskCard key = {task.id} id = {task.id} title = {task.title} description = {task.description}/>
                    ))
                }
            </div>
        )
    }
}

export default TaskList