import React, { useState } from 'react';
import './App.css';
import freeCodeCampLogo from './images/freeCodeCamp-logo.png';
import Button from './components/Button';
import Counter from './components/Counter';
import ButtonClass from './components/ButtonClass';
import CounterClass from './components/CounterClass';


class App extends React.Component {
	constructor() {
		super();
		this.state = {
			clicks: 0,
		};
		this.click = this.click.bind(this);
		this.reboot = this.reboot.bind(this);
	};

	click() {
		this.setState(({ clicks }) => ({ clicks: clicks + 1 }));
	};

	reboot() {
		this.setState({clicks: 0});
	};

	render() {
		return (
			<div className='App'>
				<div className='freeCodeCamp-logo-container'>
					<img
						className='freeCodeCamp-logo'
						src={freeCodeCampLogo}
						alt='freeCodeCamp logo'
					/>
				</div>
				<div className='counter-main-container'>
					<CounterClass
						clicks={this.state.clicks}
					/>
					<ButtonClass
						text='Click'
						isCountableClick={true}
						clickHandler={this.click}
					/>
					<ButtonClass
						text='Reboot'
						isCountableClick={false}
						clickHandler={this.reboot}
					/>
				</div>
			</div>
		)
	};
};

// function App() {
// 	const [clicks, setClicks] = useState(0);

// 	const click = () => {
// 		setClicks(clicks + 1);
// 	};

// 	const reboot = () => {
// 		setClicks(0);
// 	};

// 	return (
// 		<div className='App'>
// 			<div className='freeCodeCamp-logo-container'>
// 				<img
// 					className='freeCodeCamp-logo'
// 					src={freeCodeCampLogo}
// 					alt='freeCodeCamp logo'
// 				/>
// 			</div>
// 			<div className='counter-main-container'>
// 				<Counter
// 					clicks={clicks}
// 				/>
// 				<Button
// 					text='Click'
// 					isCountableClick={true}
// 					clickHandler={click}
// 				/>
// 				<Button
// 					text='Reboot'
// 					isCountableClick={false}
// 					clickHandler={reboot}
// 				/>
// 			</div>
// 		</div>
// 	);
// };

export default App;
