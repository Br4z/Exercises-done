import React from 'react';
import '../styles/Button.css';


class Button extends React.Component {
	render() {
		return (
			<button
				className={this.props.isCountableClick ? 'click-button' : 'reboot-button'}
				onClick={this.props.clickHandler}
			>
				{this.props.text}
			</button>
		)
	};
};

export default Button;
