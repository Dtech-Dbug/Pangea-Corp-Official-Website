// Import all other contacts here
// add a nav on top, to navigate etween the diffrent contact region to make the design cleaner

import React, { useEffect } from "react";
import ContactInfo from "./ContactInfo";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import AOS from "aos";

// const contactInfo = () => (
// 	<ContactInfo
// 		address="82/A, Usha Jubilee Town 36, 4th Floor, 8-2-293, Rd Number 36, Jubilee Hills, Hyderabad, Telangana 500033"
// 		contact="+0124 415 8000"
// 		email="hello@parngeacrop.com"
// 	/>
// );

const data = [
	{
		id: 0,
		data: "slide-down",
		address:
			"82/A, Usha Jubilee Town 36, 4th Floor, 8-2-293, Rd Number 36, Jubilee Hills, Hyderabad, Telangana 500033",
		contact: +9191919191,
		email: "hello@ hello",
		city: "Hyederabd",
		country: "India",
	},
];

const Contact = () => {
	return (
		<div id="contact">
			<div className="contact-container" data-aos="fade-in">
				<h2>Contact</h2>

				{data.map(({ id, data, address, contact, email, city, country }) => {
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
				})}
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
