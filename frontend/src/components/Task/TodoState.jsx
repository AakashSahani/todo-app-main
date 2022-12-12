import React from 'react';

function TodoState({ todolist, setTodolist }) {
	const handleClick = () => {
		console.log('Hello world');
	};
	return (
		<div className="todo-state">
			<p>{todolist.length} items left</p>
			<ul>
				<li>
					<button onClick={handleClick}>All</button>
				</li>
				<li>
					<button onClick={handleClick}>Active</button>
				</li>
				<li>
					<button onClick={handleClick}>Completed</button>
				</li>
			</ul>
			<button onClick={handleClick}>Clear Completed</button>
		</div>
	);
}

export default TodoState;
