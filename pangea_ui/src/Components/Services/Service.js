import React, { useEffect } from "react";

import WebApp from "./WebApp";
import UI_UX from "./UI_UX";
import AppDev from "./AppDev";
import Digital from "./Digital";
import HouseOfContents from "./HouseOfContents";

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
      <HouseOfContents />
    </div>
  );
};

export default Service;
