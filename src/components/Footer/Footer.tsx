export const Footer = () => {
  return (
    <section
      id="contacts-section"
      className="bg-white px-2 py-18 lg:px-20"
      data-aos="fade-up"
      data-aos-duration="1000"
      role="contentinfo"
    >
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="w-full flex flex-col items-center gap-3 bg-gray-200 rounded-2xl p-5 cursor-pointer hover:bg-gray-300">
          <img src="/footer-santa-claus.svg" alt="Иллюстрация Санта-Клауса" className="w-20 h-20" loading="lazy" />
          <a
            href="tel:+375291112233"
            className="font-semibold text-2xl tracking-[16%] uppercase"
            aria-label="Позвонить по номеру +375 (29) 111-22-33"
          >
            +375 (29) 111-22-33
          </a>
          <p className="uppercase font-semibold text-16px tracking-[8%]">
            Call Us
          </p>
        </div>
        <div className="w-full flex flex-col items-center gap-3 bg-gray-200 rounded-2xl p-5 cursor-pointer hover:bg-gray-300">
          <img src="/footer-christmas-tree.svg" alt="Иллюстрация рождественской елки" className="w-20 h-20" loading="lazy" />
          <p className="font-semibold text-2xl tracking-[16%] uppercase">
            Magic forest
          </p>
          <p className="uppercase font-semibold text-16px tracking-[8%]">
            meet us
          </p>
        </div>
        <div className="w-full flex flex-col items-center gap-3 bg-gray-200 rounded-2xl p-5 cursor-pointer hover:bg-gray-300">
          <img src="/footer-snake.svg" alt="Иллюстрация новогоднего змея" className="w-20 h-20" loading="lazy" />
          <a
            href="mailto:gifts@magic.com"
            className="font-semibold text-2xl tracking-[16%] uppercase"
            aria-label="Отправить электронное письмо на gifts@magic.com"
          >
            gifts@magic.com
          </a>
          <p className="uppercase font-semibold text-16px tracking-[8%]">
            write us
          </p>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center gap-8 pt-18">
          <img
            className="w-4.75 h-3.75"
            src="/twitter.svg"
            alt="Twitter - ссылка на социальную сеть"
            loading="lazy"
          />
          <img
            className="w-4.75 h-3.75"
            src="/facebook.svg"
            alt="Facebook - ссылка на социальную сеть"
            loading="lazy"
          />
          <img
            className="w-4.75 h-3.75"
            src="/instagram.svg"
            alt="Instagram - ссылка на социальную сеть"
            loading="lazy"
          />
          <img className="w-4.75 h-3.75" src="/X.svg" alt="X (Twitter) - ссылка на социальную сеть" loading="lazy" />
        </div>
        <div className="flex flex-col items-center justify-center mt-4 gap-2">
          <p className="text-16px">{`© Copyright ${new Date().getFullYear()}, All Rights Reserved`}</p>
          <p className="font-allura text-2xl tracking-[5%]">Made in React</p>
        </div>
      </div>
    </section>
  );
};
