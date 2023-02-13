import {createContext, useState, useEffect} from "react"
import data from '../data/Tasks.json';

export const TaskContext = createContext();

export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([]);

    function createTask(taskTitle, taskDescription) {
        const newTask = {
            title: taskTitle,
            id: tasks.length,
            description: taskDescription
        }

        setTasks([...tasks, newTask]);
    }

    function deleteTask(id) {
        console.log(id);
        setTasks(tasks.filter((task) => task.id !== id));

    }

    useEffect(() => setTasks(data), [])

    return (
        <TaskContext.Provider value = {{
            tasks,
            createTask,
            deleteTask

        }}>
            {props.children}
        </TaskContext.Provider>
    )
}