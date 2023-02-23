import React from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function TodoInput({ todolist, setTodolist, filterlist, setFilterlist }) {
	const [todo, setTodo] = useState('');
	const handleChange = (e) => {
		setTodo(e.currentTarget.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setTodolist((todolist) => [
			...todolist,
			{ id: uuidv4(), text: todo, isComplete: false },
		]);
		setFilterlist([...todolist]);
		setTodo('');
	};

	return (
		<form onSubmit={handleSubmit} className="w-full">
			<ul className="flex flex-row-reverse bg-black p-2 rounded-md  items-center justify-between">
				<li>
					<label htmlFor="complete" hidden>
						Is task completed?
					</label>
				</li>
				<li>
					<label htmlFor="todo" hidden>
						Add a new todo
					</label>
					<input
						type="text"
						name="todo"
						id="todo"
						value={todo}
						placeholder="Add a todo..."
						onChange={handleChange}
						className="h-10 flex-1"
					/>
				</li>
				<li>
					<button
						type="submit"
						className="border p-1 rounded-lg"
						onSubmit={handleSubmit}
					>
						Add task
					</button>
				</li>
			</ul>
		</form>
	);
}

export default TodoInput;
