import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './carousel.css'; // Import the CSS

const videoFiles = [
  '/videos/v1.mp4',
  '/videos/suv500.mp4',
  '/videos/sienaJuly.mp4',
];

const VideoCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
    >
      {videoFiles.map((video, index) => (
        <div className="video-container" key={index}>
          <video autoPlay loop muted controls>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </Carousel>
  );
};

export default VideoCarousel;
