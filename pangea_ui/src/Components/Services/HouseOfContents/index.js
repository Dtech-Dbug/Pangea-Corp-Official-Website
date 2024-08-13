import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import VideoCarousel from "../../carousel";

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
