// Import all other contacts here
// add a nav on top, to navigate etween the diffrent contact region to make the design cleaner

import React from "react";
import ContactInfo from "./ContactInfo";

const Contact = () => {
	return (
		<div className="contact-container" id="contect">
			<h2>Contact</h2>

			<ul>
				<li>Hyderabad</li>
				<li>Hyderabad</li>
				<li>Hyderabad</li>
			</ul>

			<ContactInfo
				address="82/A, Usha Jubilee Town 36, 4th Floor, 8-2-293, Rd Number 36, Jubilee Hills, Hyderabad, Telangana 500033"
				contact="+0124 415 8000"
				email="hello@parngeacrop.com"
			/>
			<ContactInfo
				address="82/A, Usha Jubilee Town 36, 4th Floor, 8-2-293, Rd Number 36, Jubilee Hills, Hyderabad, Telangana 500033"
				contact="+0124 415 8000"
				email="hello@parngeacrop.com"
			/>
			<ContactInfo
				address="82/A, Usha Jubilee Town 36, 4th Floor, 8-2-293, Rd Number 36, Jubilee Hills, Hyderabad, Telangana 500033"
				contact="+0124 415 8000"
				email="hello@parngeacrop.com"
			/>
		</div>
	);
};

export default Contact;
