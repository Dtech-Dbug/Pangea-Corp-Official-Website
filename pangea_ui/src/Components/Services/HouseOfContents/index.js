import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import VideoCarousel from "../../carousel";

const data = [
	{
		id: 0,
		data: "fade-in",
		address:
			"82/A, Usha Jubilee Town 36, 4th Floor, 8-2-293, Rd Number 36, Jubilee Hills, Hyderabad, Telangana 500033",
		contact: "+91-78936 97703",
		email: "support@pangaeacorporation.com",
		city: "Hyderabad",
		country: "India",
		offset: "20",
	},
	{
		id: 1,
		data: "slide-down",
		address: "2535 Saddlebrook Dr ,Naperville ,IL, 6056",
		contact: "(+1) (650) 382 4012",
		email: "support@pangaeacorporation.com",
		city: "West Lafayette",
		country: "Usa",
	},
	{
		id: 2,
		data: "slide-down",
		address: "Fil-Am Road, Baguio, Benguet, Philippines",
		contact: "+63 949 727 7981",
		email: "support@pangaeacorporation.com",
		city: "Baguio",
		country: "Phillipines",
	},
];

const HouseOfContents = () => {
	return (
    <div id="hoc-sec">
      <div className="container" data-aos="fade-up">
        <h2>House Of Contents.</h2>
        <VideoCarousel />
      </div>
      <br />
    </div>
  );
};

export default HouseOfContents;
