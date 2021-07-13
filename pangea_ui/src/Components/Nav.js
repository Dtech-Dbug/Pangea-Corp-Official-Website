import React from "react";
const Nav = () => {
	return (
		<nav id="nav" class="nav">
			<ul class="nav-container">
				<li id="home" class="nav-item home-section active">
					<a href="#home-sec">Home</a>
				</li>

				<li id="about" class="nav-item about-section">
					<a href="#about-sec">About</a>
				</li>

				<li id="service" class="nav-item service-section">
					<a href="#services-sec">Services</a>
				</li>

				<li id="contact" class="nav-item contact-section">
					<a href="#contact-sec">Contact Us</a>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
