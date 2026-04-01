export const HeroSection = () => {
  return (
    <section className="relative bg-[url('/bg_ball.png')] bg-cover bg-center bg-red-500 min-h-143 rounded-tl-[20px] rounded-tr-[20px]">
      <div className=" relative z-10 bg-[url('/bg_snow.png')] bg-cover bg-center min-h-143 flex flex-col items-center gap-3">
        <header className="mt-29 text-center">
          <p className="text-2xl text-white font-allura tracking-[5%]">
            Merry Christmas
          </p>
          <h2 className="max-w-108 font-semibold tracking-[18%] text-[32px] text-white uppercase">
            Gift yourself the magic of new possibilities
          </h2>
        </header>

        <button className="px-6 text-white  rounded-[20px] bg-[#181C29] w-58.75 h-14">
          Explore Magical Gifts
        </button>

        <footer className="px-4 text-center">
          <p className="text-2xl text-white font-allura tracking-[5%]">
            and Happy New Year
          </p>
        </footer>
      </div>
    </section>
  );
};
