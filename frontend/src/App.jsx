import Header from './components/Header/Header';
import TodoInput from './components/Task/TodoInput';
import TodoList from './components/Task/Todolist';
import { useEffect, useState } from 'react';

function App() {
	const [todolist, setTodolist] = useState([]);
	const [filterlist, setFilterlist] = useState(todolist);
	useEffect(() => {
		setFilterlist(todolist);
	}, [todolist]);
	return (
		<>
			<Header />
			<TodoInput
				todolist={todolist}
				setTodolist={setTodolist}
				filterlist={filterlist}
				setFilterlist={setFilterlist}
			/>
			<TodoList
				todolist={todolist}
				setTodolist={setTodolist}
				filterlist={filterlist}
				setFilterlist={setFilterlist}
			/>
		</>
	);
}

export default App;
