import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Navigation from './Navigation';
import logo from './logo.png';

const Logo = styled.div`
	margin: 15px auto;
	text-align: center;
`;

const Header = () => {
	return (
		<header>
			<Logo>
				<Link to={'/'}>
					<img src={logo} alt={'West Coast Renovations'} />
				</Link>
			</Logo>
			<Navigation />
		</header>
	);
};

export default Header;
