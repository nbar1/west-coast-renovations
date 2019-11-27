import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterWrapper = styled.footer`
	text-align: center;

	> div {
		margin: 10px 0;
	}
`;

const StyledLink = styled(Link)`
	padding: 0 12px;
	color: #0088cc;
	text-decoration: none;

	:hover {
		color: #005580;
	}
`;

const Footer = () => {
	return (
		<FooterWrapper>
			<div>
				<StyledLink to={'/'}>Home</StyledLink>
				<span>|</span>
				<StyledLink to={'/about-us'}>About Us</StyledLink>
				<span>|</span>
				<StyledLink to={'/custom-renovations'}>Custom Renovations</StyledLink>
				<span>|</span>
				<StyledLink to={'/services'}>Services</StyledLink>
			</div>
			<div>Phone: 239-229-7347</div>
			<div>Mailing Address: PO Box 2316 Ft. Myers Beach, FL 33932</div>
			<div>Fully Insured, State Certified. LIC.# CBC1254707</div>
			<div>Copyright &copy; {new Date().getFullYear()}, West Coast Renovations</div>
		</FooterWrapper>
	);
};

export default Footer;
