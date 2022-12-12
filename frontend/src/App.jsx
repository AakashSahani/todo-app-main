import Header from './components/Header/Header';
import TodoInput from './components/Task/TodoInput';
import TodoList from './components/Task/Todolist';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
	const [todolist, setTodolist] = useState([]);
	useEffect(() => {
		console.log(todolist);
	}, []);
	return (
		<div className="App">
			<Header />
			<TodoInput todolist={todolist} setTodolist={setTodolist} />
			<TodoList todolist={todolist} setTodolist={setTodolist} />
		</div>
	);
}

export default App;
