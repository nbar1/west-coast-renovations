import React from 'react';
import styled from 'styled-components';

const CustomRenovationsWrapper = styled.div`
	background: #eee;
	box-shadow: 0px 1px 5px 0px #4a4a4a;
	margin: 0 auto;
	max-width: 800px;
	padding: 30px;
	text-align: center;

	> p {
		text-align: justify;
	}

	ul {
		text-align: left;
	}
`;

const Title = styled.div`
	margin: 50px 0 20px;
	font-size: 22px;

	:first-child {
		margin-top: 10px;
	}
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

const CustomRenovations = () => {
	return (
		<CustomRenovationsWrapper>
			<Title>Custom Renvoations</Title>
			<p>
				West Coast Renovations provides planning & pre-construction services that offers the customer a chance
				to meet with a professional designer to discuss their home renovations, their wish list, and what the
				real possibilities are for upgrades in their particular situation.
			</p>
			<p>
				Details of the renovation are discussed throughly with the client prior to work commencing, and the
				client is kept informed of progress throughout the project. We encourage our customers to voice any
				concerns at any time throughout the project.
			</p>
			<p>
				West Coast Renovations uses only the highest quality products and the latest technology. We are aware of
				the changing technology, building code upgrades, and relevant information to our industry that will
				effect the results of our renovations.
			</p>
			<p>
				West Coast is a fully insured and licenced company. We carry both liability and workers compensation.
				All of our renovations are completed by in-house employees, never sub-contractors
			</p>
			<p>As beautiful as you can dream it, West Coast can renovate it.</p>

			<Title>Handicap Renovations</Title>
			<p>
				At West Coast Renovations we have the capability and expertise to design & build wheelchair-accessible
				bathrooms and universal-access bathrooms for your home or condominium. Your handi-cap accessible
				bathroom doesn't need to look institutional as they can be furnished with almost any luxury fixtures,
				tiles and finishes and still be totally ergonomically friendly.
			</p>

			<p>
				Today more and more seniors are wishing to remain in their homes for as long as possible to maintain
				their independence, with that goal we can design and construct a bathroom that works for seniors and is
				"user-friendly and safe from slip and falls," even if you are mobility-challenged. We regularly remove
				existing bathtubs and replace them with barrier-free showers with built-in seats/benches,
				grabbars/support bars and easily-accessible controls that are both beautiful and functional . Your
				bathroom can now be custom-built to your mobility needs both for the present and taking into
				consideration future mobility needs.
			</p>

			<Title>Hurricane Preparedness</Title>
			<ul>
				<li>
					Brace your roof trussing and install hurricane straps, which can be done by a roofing professional.
				</li>
				<li>Remove or secure wind turbines on your roof.</li>
				<li>Lower or secure satellite dishes or antennas.</li>
				<li>Remove or fasten all awnings or shutters.</li>
				<li>Keep swimming pool full to about 12 inches below the edge.</li>
				<li>
					Fill large outdoor containers such as trash bins and land-docked boats with water to secure them.
				</li>
				<li>Brace garage door. There are kits available at home stores or through garage door companies.</li>
				<li>Wedge sliding glass doors to prevent them from being lifted from their tracks.</li>
				<li>
					Make sure all windows, doors and opening are completely covered. Do not leave windows cracked open.
				</li>
				<li>
					Measure windows to know what size plywood or protection covering such as hurricane shutters you need
					to install.
				</li>
				<li>
					Trim trees and shrubbery to reduce flying debris ahead of time. Do not trim if there is a hurricane
					watch because trash pickup may be delayed.
				</li>
				<li>
					Fill sinks and bathtubs with water because this may be your only safe water on hand should a storm
					hit.
				</li>
				<li>Set your refrigerator and freezer to the coldest settings to keep food longer if power fails.</li>
				<li>
					Show all family members how to turn off water, gas and electricity and go over preperation tips so
					everyone can help.
				</li>
				<li>Elevate appliances and furniture to protect them from high water.</li>
				<li>Remove pictures, mirrors and other wall hangings.</li>
				<li>
					Make sure you have an updated inventory or a videotape of your property to give to your insurance
					company.
				</li>
			</ul>
		</CustomRenovationsWrapper>
	);
};

export default CustomRenovations;
