import '../styles/Button.css';


function Button({ children, clickHandler }) {
	const isOperator = value => {
		return isNaN(value) && (value !== '.') && (value !== '=');
	};

	return (
		<div
			className={`button-container${isOperator(children) ? ' operator' : ''}`}
			onClick={() => clickHandler(children)}
		>
			{children}
		</div>
	);
};

export default Button;
