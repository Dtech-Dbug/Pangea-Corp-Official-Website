// Import all other contacts here
// add a nav on top, to navigate etween the diffrent contact region to make the design cleaner

import React from "react";
import ContactInfo from "./ContactInfo";

//import carousel component from library
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

//let me do the import bro
import "../../index.css";

//bro <3
// it is looking great on mobile
// i will send you a video, after doing a few minor edits

const data = [
	{
		id: 0,
		data: "fade-in",
		address:
			"82/A, Usha Jubilee Town 36, 4th Floor, 8-2-293, Rd Number 36, Jubilee Hills, Hyderabad, Telangana 500033",
		contact: "+91-78936 97703",
		email: "support@pangaeacorporation.com",
		city: "Hyderabad",
		country: "India",
		offset: "20",
	},
	{
		id: 1,
		data: "slide-down",
		address: "2535 Saddlebrook Dr ,Naperville ,IL, 6056",
		contact: "(+1) (650) 382 4012",
		email: "support@pangaeacorporation.com",
		city: "West Lafayette",
		country: "Usa",
	},
	{
		id: 2,
		data: "slide-down",
		address: "Fil-Am Road, Baguio, Benguet, Philippines",
		contact: "+63 949 727 7981",
		email: "support@pangaeacorporation.com",
		city: "Baguio",
		country: "Phillipines",
	},
];

const Contact = () => {
	return (
		<div id="contact-sec">
			<div className="contact-container" data-aos="fade-up">
				<h2>Contact.</h2>

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
