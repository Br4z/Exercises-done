import './App.css';
import logo from './images/freeCodeCamp-logo.png';
import Logo from './components/Logo';
import TaskList from './components/TaskList';


function App() {
	return (
		<div className='App'>
			<Logo
				source={logo}
				name='freeCodeCamp'
			/>
			<div className='main-tasks-list'>
				<h1>My taks</h1>
				<TaskList />
			</div>
		</div>
	);
}

export default App;
