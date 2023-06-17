import '../styles/Button.css';


function Button({ text, isCountableClick, clickHandler }) {
	return (
		<button
			className={isCountableClick ? 'click-button' : 'reboot-button'}
			onClick={clickHandler}
		>
			{text}
		</button>
	);
};

export default Button;
