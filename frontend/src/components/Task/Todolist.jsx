import React from 'react';
import Todo from './Todo';
import TodoState from './TodoState';

function TodoList({ todolist, setTodolist }) {
	return (
		<ul className="todo-list">
			{todolist.map((todo) => (
				<li key={todo.id}>
					<Todo text={todo.text} />
				</li>
			))}
			<li>
				<TodoState todolist={todolist} setTodolist={setTodolist} />
			</li>
		</ul>
	);
}

export default TodoList;
