import React from 'react';
import styled from 'styled-components';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import interior1 from './assets/interior-1.jpg';
import interior2 from './assets/interior-2.jpg';
import interior3 from './assets/interior-3.jpg';

const HomepageWrapper = styled.div`
	margin: 0 3vw;
`;

const StyledCarousel = styled(Carousel)`
	box-shadow: 0 0px 5px 0px #2b2b2b;
	border-radius: 4px;
`;

const Links = styled.div`
	margin: 30px auto 0;
	text-align: center;

	> a {
		display: inline-block;
	}
`;

const Homepage = () => {
	return (
		<HomepageWrapper>
			<StyledCarousel
				showArrows={false}
				showStatus={false}
				showIndicators={false}
				showThumbs={false}
				infiniteLoop={true}
				autoPlay={true}
				interval={7500}
			>
				<div>
					<img src={interior1} alt={''} />
				</div>
				<div>
					<img src={interior2} alt={''} />
				</div>
				<div>
					<img src={interior3} alt={''} />
				</div>
			</StyledCarousel>
			<Links>
				<a href={'http://energystar.gov/'} target={'_blank'}>
					<img src={'/assets/energystar_logo_hp.png'} alt={'Energy Star'} />
				</a>
				<a href={'http://fhba.com/'} target={'_blank'}>
					<img src={'/assets/fhba_logo_hp.png'} alt={'Florida Home Builders Association'} />
				</a>
				<a href={'http://bia.net/'} target={'_blank'}>
					<img src={'/assets/bia_logo_hp.png'} alt={'Building Industry Association'} />
				</a>
			</Links>
		</HomepageWrapper>
	);
};

export default Homepage;
