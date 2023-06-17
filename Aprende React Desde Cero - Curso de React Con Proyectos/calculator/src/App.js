import './App.css';
import logo from './images/freeCodeCamp-logo.png';
import Logo from './components/Logo';
import Button from './components/Button';
import Screen from './components/Screen';
import ClearButton from './components/ClearButton';
import { useState } from 'react';
import { evaluate } from 'mathjs';


function App() {
	const [input, setInput] = useState('');

	const addInput = value => {
		setInput(input + value);
	};

	const calcResult = () => {

		/*
		Possible failures:

		1. Two or more operators (include points) together.
		2. A binary operator without his pair.
		*/
		const isValid = expression => {
			const firstRule = /(\.{2,}|\+{2,}|\-{2,}|\*{2,}|\/{2})/;
			const secondRule = /^[\+\-\*\/]|[\+\-\*\/]$/;

			return !(input) || !(firstRule.test(expression) || secondRule.test(expression));
		};

		isValid(input) ? setInput(evaluate(input)) : alert('Wrong input');
	};

	return (
		<div className='App'>
			<Logo
				source={logo}
				name='freeCodeCamp'
			/>
			<div className='calculator-container'>
				<Screen input={input} />
				<div className='row'>
					<Button clickHandler={addInput}>1</Button>
					<Button clickHandler={addInput}>2</Button>
					<Button clickHandler={addInput}>3</Button>
					<Button clickHandler={addInput}>+</Button>
				</div>
				<div className='row'>
					<Button clickHandler={addInput}>4</Button>
					<Button clickHandler={addInput}>5</Button>
					<Button clickHandler={addInput}>6</Button>
					<Button clickHandler={addInput}>-</Button>
				</div>
				<div className='row'>
					<Button clickHandler={addInput}>7</Button>
					<Button clickHandler={addInput}>8</Button>
					<Button clickHandler={addInput}>9</Button>
					<Button clickHandler={addInput}>*</Button>
				</div>
				<div className='row'>
					<Button clickHandler={calcResult}>=</Button>
					<Button clickHandler={addInput}>0</Button>
					<Button clickHandler={addInput}>.</Button>
					<Button clickHandler={addInput}>/</Button>
				</div>
				<div className='row'>
					<ClearButton clickHandler={() => setInput('')} />
				</div>
			</div>
		</div>
	);
};

export default App;
