import '../styles/TaskForm.css'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


function TaskForm({ onSubmit }) {

	const [input, setInput] = useState('');

	const handleChange = e => {
		setInput(e.target.value);
		console.log(input);
	};

	const handleSubmit = e => {
		e.preventDefault();

		const newTask = {
			id: uuidv4(),
			text: input,
			isDone: false
		};

		setInput('');
		onSubmit(newTask);
	};

	return (
		<form
			className='task-form'
			onSubmit={handleSubmit}
		>
			<input
				className='form-input'
				type='text'
				placeholder='Write a task'
				name='text'
				onChange={handleChange}
			/>
			<button className='form-button'>
				Add task
			</button>
		</form>
	);
};

export default TaskForm;
