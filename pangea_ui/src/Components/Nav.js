import React from "react";
const Nav = () => {
	return (
		<nav id="nav" class="nav">
			<ul class="nav-container">
				<li id="home" class="nav-item test">
					<a href="#home-sec">Home</a>
				</li>

				<li id="about" class="nav-item">
					<a href="#about-sec">About</a>
				</li>

				<li id="service" class="nav-item">
					<a href="#services-sec">Services</a>
				</li>

				<li id="contact" class="nav-item">
					<a href="#contact-sec">Contact Us</a>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
