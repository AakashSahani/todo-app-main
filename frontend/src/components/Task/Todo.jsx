import React from 'react';
import { useState } from 'react';
import './Todo.css';

function Todo({ text }) {
	const [complete, setComplete] = useState(false);
	const handleChange = () => {
		setComplete((complete) => !complete);
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
					<li className={complete ? 'complete' : ''}>
						<p className="todo-text">{text}</p>
					</li>
				</ul>
			</form>
		</>
	);
}

export default Todo;
