export const Footer = () => {
  return (
    <section id="contacts-section" className="bg-white px-2 py-18 lg:px-20">
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="w-full flex flex-col items-center gap-3 bg-gray-200 rounded-2xl p-5 cursor-pointer hover:bg-gray-300">
          <img src="/footer-santa-claus.svg" alt="" className="w-20 h-20" />
          <a
            href="tel:+375291112233"
            className="font-semibold text-2xl tracking-[16%] uppercase"
          >
            +375 (29) 111-22-33
          </a>
          <p className="uppercase font-semibold text-16px tracking-[8%]">
            Call Us
          </p>
        </div>
        <div className="w-full flex flex-col items-center gap-3 bg-gray-200 rounded-2xl p-5 cursor-pointer hover:bg-gray-300">
          <img src="/footer-christmas-tree.svg" alt="" className="w-20 h-20" />
          <p className="font-semibold text-2xl tracking-[16%] uppercase">
            Magic forest
          </p>
          <p className="uppercase font-semibold text-16px tracking-[8%]">
            meet us
          </p>
        </div>
        <div className="w-full flex flex-col items-center gap-3 bg-gray-200 rounded-2xl p-5 cursor-pointer hover:bg-gray-300">
          <img src="/footer-snake.svg" alt="" className="w-20 h-20" />
          <a
            href="mailto:"
            className="font-semibold text-2xl tracking-[16%] uppercase"
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
          <img src="/twitter.svg" alt="twitter social" />
          <img src="/facebook.svg" alt="facebook social" />
          <img src="/instagram.svg" alt="instagram social" />
          <img src="/X.svg" alt="X social" />
        </div>
        <div className="flex flex-col items-center justify-center mt-4 gap-2">
          <p className="text-16px">{`© Copyright ${new Date().getFullYear()}, All Rights Reserved`}</p>
          <p className="font-allura text-2xl tracking-[5%]">Made in React</p>
        </div>
      </div>
    </section>
  );
};
