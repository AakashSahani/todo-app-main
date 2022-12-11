import React from 'react';
import './Todo.css';

function TodoInput() {
	return (
		<form>
			<ul>
				<li>
					<label htmlFor="complete" hidden>
						Is task completed?
					</label>
					<input type="checkbox" name="complete" id="complete" />
				</li>
				<li>
					<label htmlFor="todo" hidden>
						Add a new todo
					</label>
					<input
						type="text"
						name="todo"
						id="todo"
						placeholder="Create a new todo..."
					/>
				</li>
				<li>
					<button type="submit">Add Todo</button>
				</li>
			</ul>
		</form>
	);
}

export default TodoInput;
