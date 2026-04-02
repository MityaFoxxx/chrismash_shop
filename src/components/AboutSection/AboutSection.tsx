export const AboutSection = () => {
  return (
    <div className="bg-red-500 px-2 py-15 md:py-3 lg:px-[82px]">
      <section className="relative rounded-tl-2xl rounded-tr-2xl bg-white md:flex md:rounded-b-2xl lg:pl-[59px] lg:justify-between">
        <header className="flex flex-col  justify-center gap-5 px-5 py-14 md:w-138 lg:px-0 lg:pl-[2px] lg:w-[500px] lg:pr-[82px] md:py-0 md:px-15">
          <p className="font-allura tracking-[5%] text-red-700 text-2xl">
            About
          </p>
          <h2 className="uppercase font-semibold text-2xl tracking-[16%]">
            Unleash your inner superhero!
          </h2>
          <p className="">
            This New Year marks the beginning of your journey to inner harmony
            and new strengths. We offer unique gifts that will help you improve
            your life.
          </p>
        </header>
        <footer>
          <img
            className="relative z-10 rounded-2xl h-132 w-full object-cover "
            src="/santa.png"
            alt="about section santa"
          />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-red-500 md:hidden"></div>
        </footer>
      </section>
    </div>
  );
};
