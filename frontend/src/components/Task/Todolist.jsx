import React from 'react';
import Todo from './Todo';
import TodoState from './TodoState';

function TodoList({ todolist, setTodolist, filterlist, setFilterlist }) {
	return (
		<ul>
			{filterlist.map((todo) => (
				<li key={todo.id}>
					<Todo todolist={todolist} setTodolist={setTodolist} todo={todo} />
				</li>
			))}
			{todolist.length != 0 ? (
				<li>
					<TodoState
						todolist={todolist}
						setTodolist={setTodolist}
						filterlist={filterlist}
						setFilterlist={setFilterlist}
					/>
				</li>
			) : (
				<li></li>
			)}
		</ul>
	);
}

export default TodoList;
