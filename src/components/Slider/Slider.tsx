import { useState } from 'react';
import { sliderData } from '../../shared/sliderData';
import { SliderItem } from './SliderItem';
import ArrowLeftIcon from '/public/slider_arrow_left.svg?react';
import ArrowRightIcon from '/public/slider_arrow-right.svg?react';

export const Slider = () => {
  const [sliderItems] = useState(sliderData);
  const [currentIndex, setCurrentIndex] = useState(0);


  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? sliderItems.length - 1 : prevIndex - 1
    );
  };
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === sliderItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-[url('/bg_snow.png')] bg-cover bg-center min-h-122 bg-red-500 py-16 px-2 md:py-26 lg:px-19">
      <section className="flex flex-col gap-5 justify-center">
        <header className="flex flex-col items-center gap-3">
          <p className="text-2xl font-allura text-white tracking-[5%]">
            Become Happier!
          </p>
          <h2 className="uppercase text-2xl text-white tracking-[16%]">
            in the new 2025
          </h2>
        </header>
        <main className="px-4 relative">
          <div className="overflow-hidden max-w-4xl mx-auto">
            <div 
              className="flex transition-transform duration-300 ease-in-out gap-40"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {sliderItems.map((item) => (
                <SliderItem item={item} />
              ))}
            </div>
          </div>
        </main>
        <footer className="flex gap-5 justify-end">
          <button 
            className={`p-5.5 border rounded-[20px] border-white transition-colors ${
              currentIndex === 0 
                ? 'cursor-not-allowed opacity-50' 
                : 'cursor-pointer hover:bg-white hover:bg-opacity-20'
            }`}
            onClick={currentIndex === 0 ? undefined : handlePrevClick}
            disabled={currentIndex === 0}
          >
            <ArrowLeftIcon />
          </button>
          <button 
            className={`p-5.5 border rounded-[20px] border-white transition-colors ${
              currentIndex === sliderItems.length - 1 
                ? 'cursor-not-allowed opacity-50' 
                : 'cursor-pointer hover:bg-white hover:bg-opacity-20'
            }`}
            onClick={currentIndex === sliderItems.length - 1 ? undefined : handleNextClick}
            disabled={currentIndex === sliderItems.length - 1}
          >
            <ArrowRightIcon />
          </button>
        </footer>
      </section>
    </div>
  );
};
