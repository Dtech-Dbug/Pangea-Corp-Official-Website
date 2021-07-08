import React from "react";
const Nav = () => {
	return (
		<div className="navbar">
			<ul className="nav-container">
				<li className="nav-item">
					<a className="active " href="#Home">
						Home
					</a>
				</li>
				<li className="nav-item">
					<a href="#About">About </a>
				</li>
				<li className="nav-item">
					<a href="#Service">Service</a>
				</li>
				<li className="nav-item">
					<a href="#Contact">Contact Us</a>
				</li>
			</ul>
		</div>
	);
};

export default Nav;
