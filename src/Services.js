import React from 'react';
import styled from 'styled-components';

const ServicesWrapper = styled.div`
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

const ServiceItem = styled.div`
	display: inline-block;
	font-size: 16px;
	padding: 8px 0;
	text-align: left;
	width: 300px;
`;

const Services = () => {
	return (
		<ServicesWrapper>
			<Title>State Of The Art Renovations, Outstanding Service</Title>
			<p>
				Renovating your home or condominium should be a positive experience. You need to ensure your renovation
				is a success. Our design specialists will meet with you, listen to your needs, and provide you with
				estimates and detailed drawings as well as top notch craftsmanship gained from over 30 years experience.
				West Coast Renovations crew is professional, fast and personally guaranteed.
			</p>

			<p>
				West Coast Renovations is a licensed remodeling company, fully insured with liability and workers comp.
				insurance. Job saftey and your saftey is critical to our success. We will protect all renovation areas
				from damage and leave the work site clean and orderly. We believe in constant communication throughout
				the project and we will make every effort to be available via mobile phone, voice mail and e-mail. Our
				professional services and our commitment to high standards is why West Coast Renovations is Southwest
				Floridas choice for remodeling.
			</p>
			<br />
			<ServiceItem>State of the Art Dream Kitchens</ServiceItem>
			<ServiceItem>Appliances</ServiceItem>
			<ServiceItem>Custom Countertops</ServiceItem>
			<ServiceItem>Granite - Silestone - Quartz</ServiceItem>
			<ServiceItem>Glamour Baths</ServiceItem>
			<ServiceItem>Custom Showers</ServiceItem>
			<ServiceItem>Ceramic Tile Flooring</ServiceItem>
			<ServiceItem>Marble Flooring</ServiceItem>
			<ServiceItem>Hardwood Flooring</ServiceItem>
			<ServiceItem>Custom Painting & Wallpaper</ServiceItem>
			<ServiceItem>Custom Mirrors</ServiceItem>
			<ServiceItem>Electrical Upgrades</ServiceItem>
			<ServiceItem>Niches & Shadowboxes</ServiceItem>
			<ServiceItem>Custom Interior Trim & Moldings</ServiceItem>
			<ServiceItem>Custom Woodwork</ServiceItem>
			<ServiceItem>Crown Molding</ServiceItem>
			<ServiceItem>Functional Built-ins</ServiceItem>
			<ServiceItem>Decorative Columns</ServiceItem>
			<ServiceItem>Curved Archways</ServiceItem>
			<ServiceItem>Designer Ceilings</ServiceItem>
			<ServiceItem>Interior Door Replacement</ServiceItem>
			<ServiceItem>Coffer & Domed Ceilings</ServiceItem>
			<ServiceItem>Ceiling Fans & Lighting</ServiceItem>
			<ServiceItem>Plant Shelves</ServiceItem>
			<ServiceItem>Wainscoting</ServiceItem>
			<ServiceItem>Raised Paneled Wall</ServiceItem>
		</ServicesWrapper>
	);
};

export default Services;
