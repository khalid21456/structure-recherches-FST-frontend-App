import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { slides } from "./../../data/DataSlider";
function AccueilSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className="mx-14">
      <div className="flex justify-around shadow-2xl">
        {/* Left Arrow */}
        {/* hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer */}
        <div className="group-hover:block absolute top-[300px] left-28 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer object-cover">
          <BsChevronCompactLeft onClick={prevSlide} size={40} />
        </div>

        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-[100%] rounded-sm bg-center bg-cover duration-500 pb-[35%]"
        >
          <div className="relative flex flex-col gap-3">
            <h1 className="ml-2 mt-1 px-3 py-1 bg-gray-50 bg-opacity-25 w-fit rounded-lg text-slate-500">
              {slides[currentIndex].title}{" "}
            </h1>
          </div>
        </div>
        {/* Right Arrow */}
        {/* hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer */}
        <div className="group-hover:block absolute top-[300px] right-28 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={40} />
        </div>
      </div>
    </div>
  );
}

export default AccueilSlider;
