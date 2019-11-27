import React from 'react';
import styled from 'styled-components';

const PageNotFoundWrapper = styled.div`
	font-size: 36px;
	text-align: center;
	margin: 125px 0;
`;

const PageNotFound = () => {
	return <PageNotFoundWrapper>The requested page was not found.</PageNotFoundWrapper>;
};

export default PageNotFound;
