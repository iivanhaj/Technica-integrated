import images from "./images";
import React, { useState, useEffect } from "react";

const dateList = [
  "8am - 9am",
  "4pm - 5pm", 
  "8pm - 9pm",
];



function ImageSlider() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(dateList[0]);

  useEffect(() => {
    // Automatically move to the next slide every 3 seconds (adjust as needed)
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentTime(dateList[slideIndex]); // Update current time when slideIndex changes
  }, [slideIndex]);


  const prevSlide = () => {
    setSlideIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextSlide = () => {
    setSlideIndex(
      (prevIndex) => (prevIndex + 1 + images.length) % images.length
    );
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen relative min-h-screen bg-cover bg-center bg">
      <p className="text-center mb-8">
        <span className="heading heading1">ENGA</span>
        <span className="heading heading2">GEMENTS</span>
      </p>
      <div className="caro slider w-2/6 h-3/5 max-md:w-64 max-md:h-60 relative overflow-hidden">
        {images.map((event, index) => (
          <img
            key={index}
            src={event.post}
            alt={`Post${index + 1}`}
            // Rendering of the image using opacity
            className={`object-fit: cover rounded-3xl absolute top-0 left-0 w-full h-full transition-opacity duration-500 p-4  ${
              index === slideIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <div className="m-6">
        <div>
          {images.map(
            (event, index) =>
              // Conditional rendering to display event.name only when its image is active
              index === slideIndex && (
                <div key={index}>
                <h1 className="text-white caption">{event.name}</h1>
                <p className="text-white small-caption">{currentTime}</p>
              </div>
              )
          )}
        </div>
      </div>
      <div className="flex flex-wrap gap-14">
        <button
          className="px-8 md:px-16 py-2 text-black bg-blue-100 border-blue-500 border-b-4 hover:border-b-2 hover:border-t-2 border-blue-dark hover:border-blue rounded "
          onClick={prevSlide}
        >
          <div
            class="w-0 h-0 
            border-t-[0.4rem] border-t-transparent
            border-r-[0.6rem] border-r-blue-500
            border-b-[0.4rem] border-b-transparent"
          ></div>
        </button>

        <button
          className="px-8 md:px-16 py-2 text-black bg-blue-100 border-blue-500 border-b-4 hover:border-b-2 hover:border-t-2 border-blue-dark hover:border-blue rounded "
          onClick={nextSlide}
        >
          <div
            class="w-0 h-0 
            border-t-[0.4rem] border-t-transparent
            border-l-[0.6rem] border-l-blue-500
            border-b-[0.4rem] border-b-transparent"
          ></div>
        </button>
      </div>
    </div>
  );
}

export default ImageSlider;