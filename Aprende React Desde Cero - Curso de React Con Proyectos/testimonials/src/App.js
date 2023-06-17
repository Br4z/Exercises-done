import React from 'react';
import './App.css';
import Testimony from './components/Testimony';
import TestimonyClass from './components/TestimonyClass';
import data from './data.json';


class App extends React.Component {
	render() {
		return (
			<div className='App'>
				<div className='main-container'>
					<h1>Here is what our alumni say about freeCodeCamp:</h1>
					{
						data.map((task, i) => (
							<TestimonyClass
								key={i}
								name={task.name}
								country={task.country}
								job={task.job}
								enterprise={task.enterprise}
								testimony={task.testimony}
							/>
						))
					}
				</div>
			</div>
		);
	};
};

// function App() {
// 	return (
// 		<div className='App'>
// 			<div className='main-container'>
// 				<h1>Here is what our alumni say about freeCodeCamp:</h1>
// 				{
// 					data.map((task, i) => (
// 						<Testimony
// 							key={i}
// 							name={task.name}
// 							country={task.country}
// 							job={task.job}
// 							enterprise={task.enterprise}
// 							testimony={task.testimony}
// 						/>
// 					))
// 				}
// 			</div>
// 		</div>
// 	);
// };

export default App;
