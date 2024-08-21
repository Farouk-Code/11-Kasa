/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const Slider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const previousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      event.key === "ArrowLeft" ? previousSlide() : nextSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const shouldRenderButtons = images.length > 1;

  return (
    <div className="slider">
      <div className="slide-container">
        {shouldRenderButtons && (
          <div onClick={previousSlide} className="prev">
            <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
                fill="white"
              />
            </svg>
          </div>
        )}
        <img src={images[currentSlide]} alt={`Slide ${currentSlide}`} className="slide-image" />
        {shouldRenderButtons && (
          <div className="slide-counter">
            {currentSlide + 1}/{images.length}
          </div>
        )}
        {shouldRenderButtons && (
          <div onClick={nextSlide} className="next">
            <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
                fill="white"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default Slider;
