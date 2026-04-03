import { useState } from 'react';
import { giftsDataList } from '../../shared/giftsData';
import { Card } from '../Card';

export const BestGiftSection = () => {
  const [giftsData] = useState(giftsDataList);
  return (
    <section id="best_section" className="bg-red-500 py-13 md:py-2">
      <header className="flex flex-col items-center justify-center gap-2.5">
        <p className="font-allura text-2xl tracking-[5%] text-white">
          Best Gifts
        </p>
        <h2 className="uppercase font-semibold text-2xl text-white tracking-[16%]">
          especially for you
        </h2>
      </header>
      <main className="bg-red-500 mt-5">
        <div className="flex flex-wrap justify-center items-stretch gap-3 max-w-7xl mx-auto">
          {giftsData.map((item) => (
            <Card id={item.id} item={item} />
          ))}
        </div>
      </main>
    </section>
  );
};
