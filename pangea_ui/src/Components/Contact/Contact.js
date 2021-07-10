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

const Contact = () => {
	return (
		<div className="contact-container" id="contact" data-aos="fade-in">
			<h2>Contact</h2>

			<div className="address-container">
				<ContactInfo
					data="fade-in"
					address="82/A, Usha Jubilee Town 36, 4th Floor, 8-2-293, Rd Number 36, Jubilee Hills, Hyderabad, Telangana 500033"
					contact="+0124 415 8000"
					email="hello@parngeacrop.com"
					city="Hyderabad"
				/>
				<ContactInfo
					data="slide-right"
					address="82/A, Usha Jubilee Town 36, 4th Floor, 8-2-293, Rd Number 36, Jubilee Hills, Hyderabad, Telangana 500033"
					contact="+0124 415 8000"
					email="hello@parngeacrop.com"
					city="West Lafayette"
				/>
				<ContactInfo
					data="test"
					address="82/A, Usha Jubilee Town 36, 4th Floor, 8-2-293, Rd Number 36, Jubilee Hills, Hyderabad, Telangana 500033"
					contact="+0124 415 8000"
					email="hello@parngeacrop.com"
					city="Baguio"
				/>
			</div>
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
