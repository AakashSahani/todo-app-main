import React from 'react';
import { useState } from 'react';
import sun from '../../assets/images/icon-sun.svg';
import moon from '../../assets/images/icon-moon.svg';
import TodoInput from '../Task/TodoInput';

function Header({ todolist, setTodolist, filterlist, setFilterlist }) {
	const [theme, setTheme] = useState(false);
	const handleClick = () => {
		setTheme((theme) => !theme);
	};
	return (
		<header className="border border-black h-[25vh] flex flex-col justify-between text-white p-10 bg-desktop-dark">
			<nav className="flex justify-between items-center w-full">
				<h1 className="text-3xl font-bold">TODO</h1>
				<button onClick={handleClick} className="w-fit h-fit">
					<img src={theme ? moon : sun} alt="theme" />
				</button>
			</nav>
			<TodoInput
				todolist={todolist}
				setTodolist={setTodolist}
				filterlist={filterlist}
				setFilterlist={setFilterlist}
			/>
		</header>
	);
}

export default Header;
