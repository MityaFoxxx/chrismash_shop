import { useState, useEffect } from 'react';
import { ButtonGifts } from '../ButtonGifts/ButtonGifts';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CTASection = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Функция для расчета времени до нового года
    const calculateTimeLeft = (): TimeLeft => {
      const now = new Date();
      const currentYear = now.getFullYear();
      const newYear = new Date(currentYear + 1, 0, 1); // 1 января следующего года

      // Если сегодня 1 января, считаем до следующего года
      if (now.getMonth() === 0 && now.getDate() === 1) {
        newYear.setFullYear(currentYear + 1);
      }

      const difference = newYear.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60),
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    // Обновляем время каждую секунду
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Устанавливаем начальное значение
    setTimeLeft(calculateTimeLeft());

    // Очищаем таймер при размонтировании компонента
    return () => clearInterval(timer);
  }, []);
  return (
    <section className="bg-[url('/bg_forest.png')] bg-size-[400%] md:bg-size-[200%] lg:bg-size-[100%] lg:rounded-b-2xl bg-bottom bg-no-repeat bg-red-500 h-171.25 pt-46 md:h-192 lg:h-167 md:pt-55">
      <div className=" bg-[url('/bg_snow.png')] bg-cover bg-center h-full px-2 md:w-106.5 md:m-auto">
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
                  {timeLeft.days}
                </p>
                <p className="text-white text-[12px] font-semibold tracking-[5%] uppercase">
                  days
                </p>
              </div>
              <span className="w-[0.5px] h-8 bg-pink-100/65"></span>

              <div className="flex flex-col text-center">
                <p className="text-white text-2xl font-semibold tracking-[16%]">
                  {timeLeft.hours}
                </p>
                <p className="text-white text-[12px] font-semibold tracking-[5%] uppercase">
                  hours
                </p>
              </div>
              <span className="w-[0.5px] h-8 bg-pink-100/65"></span>

              <div className="flex flex-col text-center">
                <p className="text-white text-2xl font-semibold tracking-[16%]">
                  {timeLeft.minutes}
                </p>
                <p className="text-white text-[12px] font-semibold tracking-[5%] uppercase">
                  minutes
                </p>
              </div>
              <span className="w-[0.5px] h-8 bg-pink-100/65"></span>

              <div className="flex flex-col text-center">
                <p className="text-white text-2xl font-semibold tracking-[16%]">
                  {timeLeft.seconds}
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
