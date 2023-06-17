import '../styles/ClearButton.css';


function clearButton({ clickHandler }) {
	return (
		<button
			className='clear-button'
			onClick={clickHandler}
		>
			Clear
		</button>
	);
};

export default clearButton;
