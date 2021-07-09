import React from "react";

const ContactInfo = ({ address, contact, email }) => {
	return (
		<div className="contact">
			<h3>Hyderabad</h3>

			<div className="address">
				<p>Address</p>
				<p>{address}</p>
			</div>

			<div className="mobile">
				<p>Contact</p>
				<p>{contact}</p>
			</div>

			<div className="mail">
				<p>Write to us</p>
				<p>{email}</p>
			</div>
		</div>
	);
};

export default ContactInfo;
