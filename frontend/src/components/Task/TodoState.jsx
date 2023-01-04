import React from 'react';

function TodoState({ todolist, setTodolist, filterlist, setFilterlist }) {
	const filterTask = (action) => {
		switch (action) {
			case 'ALL':
				setFilterlist([...todolist]);
				console.log('This is todolist', todolist);
				console.log('This is filterlist', filterlist);
				break;
			case 'ACTIVE':
				setFilterlist((todolist) => [
					...todolist.filter((list) => list.isComplete != true),
				]);
				break;
			case 'COMPLETE':
				setFilterlist((todolist) => [
					...todolist.filter((list) => list.isComplete === true),
				]);
				break;
			case 'CLEAR':
				setTodolist([]);
				break;
			default:
				break;
		}
	};
	return (
		<div className="todo-state">
			<p>
				{todolist.filter((list) => list.isComplete != true).length} items left
			</p>
			<ul>
				<li>
					<button onClick={() => filterTask('ALL')}>All</button>
				</li>
				<li>
					<button onClick={() => filterTask('ACTIVE')}>Active</button>
				</li>
				<li>
					<button onClick={() => filterTask('COMPLETE')}>Completed</button>
				</li>
			</ul>
			<button onClick={() => filterTask('CLEAR')}>Clear Completed</button>
		</div>
	);
}

export default TodoState;
