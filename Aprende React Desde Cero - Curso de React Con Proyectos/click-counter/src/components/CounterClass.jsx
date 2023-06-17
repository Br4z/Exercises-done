import React from 'react';
import '../styles/Counter.css';


class Counter extends React.Component {
	render() {
		return (
			<div className='counter'>
				{this.props.clicks}
			</div>
		)
	};
};

export default Counter;
