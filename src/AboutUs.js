import React from 'react';
import styled from 'styled-components';

const AboutUsWrapper = styled.div`
	background: #eee;
	box-shadow: 0px 1px 5px 0px #4a4a4a;
	margin: 0 auto;
	max-width: 800px;
	padding: 30px;
	text-align: center;

	> p {
		text-align: justify;
	}
`;

const Title = styled.div`
	margin: 10px 0 30px;
	font-size: 22px;
`;

const ImageList = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-top: 30px;

	> a {
		flex: 1 1 31%;
		padding: 1%;
	}
`;

const AboutUs = () => {
	return (
		<AboutUsWrapper>
			<Title>One of Upstate New York's largest homebuilders is now renovating in SW Florida</Title>
			<p>
				Sil Barone has been in the building and remodeling business upwards of 25 years in upstate New York. Sil
				served as the General Superintendent for Barone Building Company from 1979 to 1989. In 1989, he formed
				Sylvester A. Barone Building Company, Inc. He learned from the ground up how to build and renovate homes
				of unprecedented quality and captivating appeal. The most prominent communities in upstate New York are
				decorated with his homes.
			</p>

			<p>
				After vacationing in SW Florida for many years, Sil Barone realized that there is a need for custom
				remodelers. He found that their is an enormous amount of residents and seasonal residents in SW Florida
				that are looking for professional and reliable craftsman, and therefore founded West Coast Renovations.
			</p>

			<p>
				West Coast Renovations is truly committed to building lasting relationships with its clients. The
				integrity and enduring quality of workmanship of West Coast Renovations is matched by their unparalleled
				professionalism.
			</p>

			<p>
				When renovating your home, nothing less than perfection is acceptable. West Coast Renovations sole
				purpose is to transform thought into unequaled reality. As Beautiful as you can dream it, West Coast
				Renovations can renovate it.
			</p>

			<p>
				Custom remodeling demands a special kind of attention and unique level of skill, both of which you'll
				find at West Coast Renovations.
			</p>

			<p>
				West Coast Renovations assists their clients in every step of the way ensuring that the renovations are
				exactly how they pictured it. Your remodeled home will be a masterpiece when trusted to the capable
				hands of West Coast Renovations.
			</p>
			<ImageList>
				<a href={'http://www.bia.net/'} target={'_blank'}>
					<img src={'/assets/bia.png'} alt={'Building Industry Association'} />
				</a>
				<a href={'http://www.energystar.gov/'} target={'_blank'}>
					<img src={'/assets/energystar.png'} alt={'Energy Star'} />
				</a>
				<a href={'http://www.nkba.org/'} target={'_blank'}>
					<img src={'/assets/nkba.png'} alt={'National Kitchen and Bath Association'} />
				</a>
				<a href={'http://www.nahb.org/'} target={'_blank'}>
					<img src={'/assets/nahb.png'} alt={'National Association of Home Builds'} />
				</a>
				<a href={'http://www.nari.org/'} target={'_blank'}>
					<img src={'/assets/nari.png'} alt={'National Association of the Remodeling Industry'} />
				</a>
				<a href={'http://www.fhba.com/'} target={'_blank'}>
					<img src={'/assets/fhba.png'} alt={'Florida Home Builders Association'} />
				</a>
			</ImageList>
		</AboutUsWrapper>
	);
};

export default AboutUs;
