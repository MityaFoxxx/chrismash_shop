import { ButtonGifts } from '../ButtonGifts/ButtonGifts';

export const CTASection = () => {
  return (
    <section className="bg-[url('/bg_forest.png')] bg-[size:400%] md:bg-[size:200%] lg:bg-[size:100%] lg:rounded-b-2xl  md:bg-bottom bg-center bg-no-repeat bg-red-500 h-[685px] pt-46 md:h-[768px] lg:h-[668px]  md:pt-55">
      <div className=" bg-[url('/bg_snow.png')] bg-cover bg-center h-full px-2 md:w-[426px] md:m-auto">
        <header className="flex flex-col items-center gap-5">
          <h2 className="uppercase text-white text-2xl font-semibold tracking-[16%] text-center">
            Ready to start your journey to a better version of yourself?
          </h2>
          <ButtonGifts />
          <div className="w-[95%] md:w-[85%]">
            <p className="font-allura text-2xl text-white tracking-[5%] text-center">
              The New Year is Coming Soon...
            </p>
            <div className="flex items-center justify-center py-2 px-3 gap-4 w-full bg-pink-100/55 rounded-2xl">
              <div className="flex flex-col text-center">
                <p className="text-white text-2xl font-semibold tracking-[16%]">
                  47
                </p>
                <p className="text-white text-[12px] font-semibold tracking-[5%] uppercase">
                  days
                </p>
              </div>
              <span className="w-[0.5px] h-8 bg-pink-100/65"></span>

              <div className="flex-flex-col text-center">
                <p className="text-white text-2xl font-semibold tracking-[16%]">
                  5
                </p>
                <p className="text-white text-[12px] font-semibold tracking-[5%] uppercase">
                  hours
                </p>
              </div>
              <span className="w-[0.5px] h-8 bg-pink-100/65"></span>

              <div className="flex-flex-col text-center">
                <p className="text-white text-2xl font-semibold tracking-[16%]">
                  34
                </p>
                <p className="text-white text-[12px] font-semibold tracking-[5%] uppercase">
                  minutes
                </p>
              </div>
              <span className="w-[0.5px] h-8 bg-pink-100/65"></span>

              <div className="flex-flex-col text-center">
                <p className="text-white text-2xl font-semibold tracking-[16%]">
                  12
                </p>
                <p className="text-white text-[12px] font-semibold tracking-[5%] uppercase">
                  seconds
                </p>
              </div>
            </div>
          </div>
        </header>
      </div>
    </section>
  );
};
