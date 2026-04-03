import { useState } from 'react';
import { giftsDataList, tabs, type Gift } from '../../shared/giftsData';
import { Card } from '../Card';
import { Modal } from '../Modal';

export const GiftsSection = () => {
  const [gifts, setGifts] = useState(giftsDataList);
  const [tabsList] = useState(tabs);
  const [gift, setGift] = useState<Gift | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClickCard = (item: Gift) => {
    setGift(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const filterTabs = (tab: string) => {
    switch (tab) {
      case 'for harmony':
        setGifts(giftsDataList.filter((gift) => gift.tab === 'for harmony'));
        break;
      case 'for health':
        setGifts(giftsDataList.filter((gift) => gift.tab === 'for health'));
        break;
      case 'for work':
        setGifts(giftsDataList.filter((gift) => gift.tab === 'for work'));
        break;
      default:
        setGifts(giftsDataList);
        break;
    }
  };
  return (
    <>
      <section className="mt-16 rounded-2xl bg-red-500 pb-25 overflow-hidden">
        <img
          src="/bg-garland.svg"
          alt="GiftsSection decoration image"
          className="w-full"
        />

        <div className="px-4 sm:px-6 md:px-8 pt-2 md:pt-0 md:-my-11 lg:-mt-35">
          <p className="mx-auto uppercase text-white font-semibold text-[32px] tracking-[18%] text-center max-w-[426px]">
            Achieve health, harmony, and inner strength
          </p>

          <div className="flex justify-center gap-2 mt-5">
            {tabsList.map((tab) => (
              <div
                key={tab}
                className="uppercase text-white font-semibold text-[12px] tracking-[5%] px-1 py-3 md:px-6 cursor-pointer hover:bg-red-400 transition-colors rounded-2xl"
                onClick={() => filterTabs(tab)}
              >
                {tab}
              </div>
            ))}
          </div>

          {/* Адаптивная сетка от 380px до 1440px */}
          <div className="grid grid-cols-1 gap-4 mt-4 mx-auto max-w-[1440px] min-w-[380px]">
            {/* Мобильные: 1 колонка (до 640px) */}
            <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {gifts.map((gift) => (
                <Card
                  key={gift.id}
                  id={gift.id}
                  item={gift}
                  handleClickCard={handleClickCard}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {isModalOpen && gift && (
        <Modal item={gift} handleCloseModal={handleCloseModal} />
      )}
    </>
  );
};
