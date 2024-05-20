import { useState, useEffect, useRef, useCallback } from "react";
import Image1 from "../assets/slider1.png";
import Image2 from "../assets/slider2.png";
import Image3 from "../assets/Rectangle 18.png";
import Arrow from "../assets/arrow.png";

const images = [Image1, Image2, Image3];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  }, [isTransitioning]);

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      goToNext();
    }, 3000);

    return () => {
      resetTimeout();
    };
  }, [currentIndex, goToNext]);

  const goToPrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  }, [isTransitioning]);

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentIndex === 0) {
      setCurrentIndex(images.length);
    } else if (currentIndex === images.length + 1) {
      setCurrentIndex(1);
    }
  };

  const displayedImages = [
    images[images.length - 1],
    ...images,
    images[0],
    images[1],
  ];

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      <div className="flex items-center justify-between">
        <button
          className="absolute left-[20%] top-1/2 transform -translate-y-1/2 hover:scale-105 transition duration-300 z-10"
          onClick={goToPrev}
        >
          <img src={Arrow} alt="" />
        </button>
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform"
            style={{
              transform: `translateX(${-currentIndex * 25}%)`,
              transition: isTransitioning
                ? "transform 0.7s ease-in-out"
                : "none",
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {displayedImages.map((image, index) => (
              <div
                key={index}
                className={`w-1/4 flex-shrink-0 ${
                  index - 1 === currentIndex
                    ? "opacity-100 blur-0 !w-2/4"
                    : "opacity-50 blur-sm"
                }`}
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "500px",
                }}
              />
            ))}
          </div>
        </div>
        <button
          className="absolute right-[20%] top-1/2 transform -translate-y-1/2 rotate-180 hover:scale-105 transition duration-300 z-10"
          onClick={goToNext}
        >
          <img src={Arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Slider;
