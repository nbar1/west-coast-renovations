import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled, { css } from 'styled-components';

const NavigationWrapper = styled.div`
	background-image: linear-gradient(to bottom, #fff, #f2f2f2);
	background-repeat: repeat-x;
	border-bottom: 1px solid #d4d4d4;
	box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
	height: 40px;
	text-align: center;
`;

const StyledLink = styled.div`
	border-left: 1px solid #f2f2f2;
	border-right: 1px solid #fff;
	display: inline-block;
	font-weight: 300;

	a {
		color: #777;
		height: 40px;
		line-height: 40px;
		padding: 13px 30px;
		text-decoration: none;
		text-shadow: 0 1px 0 #e2e2e2;

		:hover {
			color: #333;
		}
	}

	:last-child {
		border-right: 1px solid #f2f2f2;
	}

	${props =>
		props.active === true &&
		css`
			background-color: #e5e5e5;
			box-shadow: inset 0 3px 8px rgba(0, 0, 0, 0.125);

			a {
				color: #333;
			}
		`}
`;

const Navigation = ({ location }) => {
	console.log(location);
	return (
		<NavigationWrapper>
			<nav>
				<StyledLink active={location.pathname === '/about-us'}>
					<Link to={'/about-us'}>About Us</Link>
				</StyledLink>
				<StyledLink active={location.pathname === '/custom-renovations'}>
					<Link to={'/custom-renovations'}>Custom Renovations</Link>
				</StyledLink>
				<StyledLink active={location.pathname === '/services'}>
					<Link to={'/services'}>Services</Link>
				</StyledLink>
			</nav>
		</NavigationWrapper>
	);
};

export default withRouter(Navigation);
