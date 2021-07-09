// Import all other contacts here
// add a nav on top, to navigate etween the diffrent contact region to make the design cleaner

import React from "react";
import ContactInfo from "./ContactInfo";

const Contact = () => {
	return (
		<div className="contact-container">
			<h2>Contact</h2>
			<ContactInfo address="hello" contact="+122444" email="hello@hello" />
		</div>
	);
};

export default Contact;
