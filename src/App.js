import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga';

import Header from './Header';
import Footer from './Footer';
import Homepage from './Homepage';
import AboutUs from './AboutUs';
import CustomRenovations from './CustomRenovations';
import Services from './Services';
import PageNotFound from './PageNotFound';

const SiteStyles = createGlobalStyle`
	html, body {
		color: #333;
		font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
		font-size: 14px;
		font-weight: 300;
		line-height: 20px;
		margin: 0;
		padding: 0;
	}
`;

const ContentWrapper = styled.div`
	margin: 20px auto;
`;

function App() {
	ReactGA.initialize('UA-39473337-2');

	return (
		<div className="App">
			<SiteStyles />
			<BrowserRouter>
				<Header />
				<ContentWrapper>
					<Switch>
						<Route exact path="/" component={() => <Homepage />} />
						<Route exact path="/about-us" component={() => <AboutUs />} />
						<Route exact path="/custom-renovations" component={() => <CustomRenovations />} />
						<Route exact path="/services" component={() => <Services />} />

						<Route exact path="/aboutus" component={() => <Redirect to="/about-us" />} />
						<Route
							exact
							path="/customrenovations"
							component={() => <Redirect to="/custom-renovations" />}
						/>

						<Route component={PageNotFound} />
					</Switch>
				</ContentWrapper>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
