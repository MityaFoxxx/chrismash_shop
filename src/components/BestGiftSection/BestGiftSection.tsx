import { useMemo } from 'react';
import { giftsDataList } from '../../shared/giftsData';
import { Card } from '../Card';

export const BestGiftSection = () => {
  // ✅ Вычисляем топ-4 подарка напрямую через useMemo
  const bestGifts = useMemo(() => {
    // Считаем сумму суперсил для каждого подарка
    const giftsWithSum = giftsDataList.map((gift) => ({
      id: gift.id,
      sumSuperpowers: Object.values(gift.superpowers).reduce(
        (sum, value) => sum + value,
        0,
      ),
    }));

    // Получаем ID топ-4 подарков
    const top4Ids = giftsWithSum
      .sort((a, b) => b.sumSuperpowers - a.sumSuperpowers)
      .slice(0, 4)
      .map((gift) => gift.id);

    // Возвращаем отфильтрованные подарки
    return giftsDataList.filter((gift) => top4Ids.includes(gift.id));
  }, [giftsDataList]); // ✅ Зависимости пустые, т.к. giftsDataList статичен

  console.log(bestGifts);

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
          {bestGifts.map((item) => (
            <Card key={item.id} id={item.id} item={item} />
          ))}
        </div>
      </main>
    </section>
  );
};
