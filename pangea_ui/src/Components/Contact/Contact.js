// Import all other contacts here
// add a nav on top, to navigate etween the diffrent contact region to make the design cleaner

import React from "react";
import ContactInfo from "./ContactInfo";

//import carousel component from library
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

//let me do the import bro
import "../../index.css";

const data = [
	{
		id: 0,
		data: "fade-in",
		address:
			"82/A, Usha Jubilee Town 36, 4th Floor, 8-2-293, Rd Number 36, Jubilee Hills, Hyderabad, Telangana 500033",
		contact: +9191919191,
		email: "hello@ hello",
		city: "Hyederabd",
		country: "India",
		offset: "20",
	},
	{
		id: 1,
		data: "slide-down",
		address:
			"82/A, Usha Jubilee Town 36, 4th Floor, 8-2-293, Rd Number 36, Jubilee Hills, Hyderabad, Telangana 500033",
		contact: +9191919191,
		email: "hello@ hello",
		city: "West Lafayette",
		country: "Usa",
	},
	{
		id: 2,
		data: "slide-down",
		address:
			"82/A, Usha Jubilee Town 36, 4th Floor, 8-2-293, Rd Number 36, Jubilee Hills, Hyderabad, Telangana 500033",
		contact: +9191919191,
		email: "hello@ hello",
		city: "Baguio",
		country: "Phillipines",
	},
];

const Contact = () => {
	return (
		<div id="contact">
			<div className="contact-container" data-aos="fade-up">
				<h2>Contact</h2>

				<Carousel
					showArrows={false}
					// autoPlay
					// infiniteLoop
					interval="2500"
					transitionTime="1000"
					showStatus={false}
				>
					{data.map(
						({ id, data, address, contact, email, city, country, offset }) => {
							return (
								<div className="address-container" key={id}>
									<ContactInfo
										city={city}
										country={country}
										address={address}
										contact={contact}
										email={email}
									/>
								</div>
							);
						}
					)}
				</Carousel>
			</div>
			<br />
		</div>
	);
};

export default Contact;

/*
<ContactInfo
					address="82/A, Usha Jubilee Town 36, 4th Floor, 8-2-293, Rd Number 36, Jubilee Hills, Hyderabad, Telangana 500033"
					contact="+0124 415 8000"
					email="hello@parngeacrop.com"
				/>*/
