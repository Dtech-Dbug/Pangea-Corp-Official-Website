import React from "react";

const ContactInfo = ({
	address,
	contact,
	email,
	data,
	city,
	country,
	offset,
}) => {
	return (
		<div className="contact" data-aos={data} data-aos-offset={offset}>
			<h3>
				{city} , {country}
			</h3>

			<div className="address">
				<p>Address :</p>
				<p>{address}</p>
			</div>

			<div className="mobile">
				<p>Contact :</p>
				<p>{contact}</p>
			</div>

			<div className="mail">
				<p>Write to us :</p>
				<p>{email}</p>
			</div>
		</div>
	);
};

export default ContactInfo;
