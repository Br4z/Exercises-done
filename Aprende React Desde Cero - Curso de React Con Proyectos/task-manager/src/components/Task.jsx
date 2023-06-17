import '../styles/Task.css';
import { AiFillCloseCircle } from 'react-icons/ai';


function Task({ id, text, isDone, completeTask, deleteTask }) {
	return (
		<div className={`task-container${isDone ? ' done' : ''}`}>
			<div
				className='task-text'
				onClick={() => completeTask(id)}
			>
				{text}
			</div>
			<div
				className='icons-container'
				onClick={() => deleteTask(id)}
			>
				<AiFillCloseCircle className='task-icon' />
			</div>
		</div>
	);
};

export default Task;
