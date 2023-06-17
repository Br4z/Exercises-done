import '../styles/TaskList.css';
import Task from './Task';
import TaskForm from './TaskForm';
import { useState, useEffect } from 'react';


const localTasks = JSON.parse(localStorage.getItem('tasks'));

function TaskList() {

	const [tasks, setTasks] = useState(localTasks || []);

	useEffect(() => {
		window.localStorage.setItem('tasks', JSON.stringify(tasks))
	}, [tasks]);

	const addTask = task => {
		if (task.text.trim()) {
			task.text = task.text.trim();

			setTasks([task, ...tasks]);
		}
	};

	const deleteTask = id => {
		const newTasks = tasks.filter(task => task.id !== id);

		setTasks(newTasks);
	};

	const completeTask = id => {
		const newTasks = tasks.map(task => {
			if (task.id === id) task.isDone = !task.isDone;

			return task;
		});

		setTasks(newTasks);
	};

	return (
		<>
			<TaskForm
				onSubmit={addTask}
			/>
			<div className='task-list-container'>
				{
					tasks.map(task =>
						<Task
							key={task.id}
							id={task.id}
							text={task.text}
							isDone={task.isDone}
							completeTask={completeTask}
							deleteTask={deleteTask}
						/>
					)
				}
			</div>
		</>
	);
};

export default TaskList;
