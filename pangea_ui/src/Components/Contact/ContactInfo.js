import React from "react";

const ContactInfo = ({ address, contact, email, data }) => {
	return (
		<div className="contact" data-aos={data}>
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
