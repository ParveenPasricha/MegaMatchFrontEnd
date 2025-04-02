import React, { useState, useEffect } from "react";
import Headline from "./Headline";

const slides = [
  {
    text: "ALWAYS IN YOUR POCKET",
    image: "https://madeeasycricketacademy.in/images/sliders/meca-slider-2.jpg",
  },
  {
    text: "ENJOY SEAMLESS GAMING",
    image: "https://images.pond5.com/slider-shot-along-cricket-bat-footage-197049184_iconl.jpeg",
  },
  {
    text: "Mohali Stadium",
    image: "https://media.tripinvites.com/places/chandigarh/mohali-cricket-stadium/panoramic-view-of-mohali-cricket-stadium-chandigarh.jpg"
  }
];

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="lg:w-full">
      <div
        className="relative w-full lg:h-[300px] bg-cover bg-center transition-all duration-500 ease-in-out"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center">
          <div className="text-center text-white p-4">
            <h2 className="text-xl sm:text-3xl font-bold">{slides[currentSlide].text}</h2>
          </div>
        </div>

        {/* Show buttons only on medium and larger screens */}
        <button
          onClick={() =>
            setCurrentSlide((prevSlide) =>
              prevSlide === 0 ? slides.length - 1 : prevSlide - 1
            )
          }
          className="hidden sm:block absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/60 p-2 rounded-full text-white"
        >
          &#8592;
        </button>

        <button
          onClick={() =>
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
          }
          className="hidden sm:block absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/60 p-2 rounded-full text-white"
        >
          &#8594;
        </button>
      </div>
      <Headline />
    </div>
  );
}
