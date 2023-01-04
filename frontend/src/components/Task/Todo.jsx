import React from 'react';
import './Todo.css';

function Todo({ todolist, setTodolist, todo }) {
	const handleChange = () => {
		const myNewTodo = [...todolist];
		const myTodo = myNewTodo.find((td) => td.id === todo.id);
		myTodo.isComplete = myTodo.isComplete ? false : true;
		setTodolist(myNewTodo);
	};
	return (
		<>
			<form>
				<ul>
					<li>
						<label htmlFor="complete" hidden>
							Is task completed?
						</label>
						<input
							type="checkbox"
							name="complete"
							id="complete"
							onChange={handleChange}
						/>
					</li>
					<li className={todo.isComplete === true ? 'complete' : ''}>
						<p className="todo-text">{todo.text}</p>
					</li>
				</ul>
			</form>
		</>
	);
}

export default Todo;
