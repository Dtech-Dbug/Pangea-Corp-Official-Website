import React from "react";
import LogoLight from "../Images/Pangaeacroplogo(Light).svg";
import logoDArk from "../Images/Pangaeacroplogo(Dark).svg";
import DarkLogo from "../Images/Light.svg";

function Home() {
	return (
		<div data-aos="fade-down" className="home" id="home-sec">
			<img src={DarkLogo} alt="" />
		</div>
	);
}

export default Home;
