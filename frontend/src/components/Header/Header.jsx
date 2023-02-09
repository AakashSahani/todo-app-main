import React from 'react';
import { useState } from 'react';
import sun from '../../assets/images/icon-sun.svg';
import moon from '../../assets/images/icon-moon.svg';

function Header() {
	const [theme, setTheme] = useState(false);
	const handleClick = () => {
		setTheme((theme) => !theme);
	};
	return (
		<header>
			<h1>TODO</h1>
			<button onClick={handleClick}>
				<img src={theme ? moon : sun} alt="theme" />
			</button>
		</header>
	);
}

export default Header;
