import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavigationWrapper = styled.div`
	background-image: linear-gradient(to bottom, #fff, #f2f2f2);
	background-repeat: repeat-x;
	border-bottom: 1px solid #d4d4d4;
	box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
	height: 40px;
	text-align: center;
`;

const StyledLink = styled(Link)`
	display: inline-block;
	padding: 0 30px;
	line-height: 40px;
	height: 40px;
	color: #777;
	text-decoration: none;
	text-shadow: 0 1px 0 #e2e2e2;
	font-weight: 300;
	border-left: 1px solid #f2f2f2;
	border-right: 1px solid #fff;

	:last-child {
		border-right: 1px solid #f2f2f2;
	}

	:hover {
		color: #333;
	}
`;

const Navigation = () => {
	return (
		<NavigationWrapper>
			<nav>
				<StyledLink to={'/about-us'}>About Us</StyledLink>
				<StyledLink to={'/custom-renovations'}>Custom Renovations</StyledLink>
				<StyledLink to={'/services'}>Services</StyledLink>
			</nav>
		</NavigationWrapper>
	);
};

export default Navigation;
