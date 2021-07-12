import React, { useEffect } from "react";
import WebApp from "./WebApp";
import UI_UX from "./UI_UX";
import AppDev from "./AppDev";
import Digital from "./Digital";

//animation
import AOS from "aos";
import "aos/dist/aos.css";

const Service = () => {
	useEffect(() => {
		AOS.init({
			offset: 700,
			duration: 900,
		});
	}, []);
	return (
		<div id="services-sec">
			<WebApp />
			<UI_UX />
			<AppDev />
			<Digital />
		</div>
	);
};

export default Service;
