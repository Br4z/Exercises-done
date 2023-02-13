import {useState, useContext} from 'react';
import {TaskContext} from "../context/TaskContext"

function TaskForm() {
    const {createTask} = useContext(TaskContext);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask(title, description);

        setTitle("");
        setDescription("");
    }

    return (
        <div className = "max-w-md mx-auto">
            <form onSubmit = {handleSubmit} className = "bg-slate-800 p-10 mb-4">
                <h1 className = "text-white font-bold text-2xl mb-3">Create a task</h1>
                <input
                    className = "bg-slate-300 p-3 w-full mb-2"
                    placeholder = "Write your task"
                    onChange = {(e) => setTitle(e.target.value)}
                    value = {title}
                    autoFocus
                />
                <textarea
                    className = "bg-slate-300 p-3 w-full mb-2"
                    placeholder = "Write your task description"
                    onChange = {(e) => setDescription(e.target.value)}
                    value = {description}
                ></textarea>
                <button
                    className = "bg-indigo-500 px-3 py-1 text-white hover:bg-indigo-400"
                >
                    Save
                </button>
            </form>
        </div>
    )
}

export default TaskForm