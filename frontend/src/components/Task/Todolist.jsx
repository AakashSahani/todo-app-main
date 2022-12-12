import React from 'react';
import Todo from './Todo';

function TodoList({ todolist, setTodolist }) {
	return (
		<ul className="todo-list">
			{todolist.map((todo) => (
				<li key={todo.id}>
					<Todo text={todo.text} />
				</li>
			))}
		</ul>
	);
}

export default TodoList;
