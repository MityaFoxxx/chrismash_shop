import { useState } from 'react';
import { sliderData } from '../../shared/sliderData';
import { SliderItem } from './SliderItem';
import ArrowLeftIcon from '/public/slider_arrow_left.svg?react';
import ArrowRightIcon from '/public/slider_arrow-right.svg?react';

export const Slider = () => {
  const [sliderItems] = useState(sliderData);
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
        <main className="px-4 flex gap-5 items-center overflow-hidden">
          {sliderItems.map((item) => (
            <SliderItem item={item} />
          ))}
        </main>
        <footer className="flex gap-5 justify-end">
          <button className="p-5.5 border rounded-[20px] border-white ">
            <ArrowLeftIcon />
          </button>
          <button className="p-5.5 border rounded-[20px] border-white">
            <ArrowRightIcon />
          </button>
        </footer>
      </section>
    </div>
  );
};
