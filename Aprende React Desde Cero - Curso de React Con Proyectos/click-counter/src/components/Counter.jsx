import '../styles/Counter.css';


function Counter({ clicks }) {
	return (
		<div className='counter'>
			{clicks}
		</div>
	);
};

export default Counter;
