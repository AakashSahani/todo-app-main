import React from 'react';
import Todo from './Todo';
import TodoState from './TodoState';

function TodoList({ todolist, setTodolist, filterlist, setFilterlist }) {
	return (
		<ul className="todo-list">
			{filterlist.map((todo) => (
				<li key={todo.id}>
					<Todo todolist={todolist} setTodolist={setTodolist} todo={todo} />
				</li>
			))}
			<li>
				<TodoState
					todolist={todolist}
					setTodolist={setTodolist}
					filterlist={filterlist}
					setFilterlist={setFilterlist}
				/>
			</li>
		</ul>
	);
}

export default TodoList;
