import React, { useState } from 'react';
import { tabColors, type Gift } from '../../shared/giftsData';

interface ModalProps {
  item: Gift;
  handleCloseModal: () => void;
}

export const Modal = ({ item, handleCloseModal }: ModalProps) => {
  const [superpowers, setSuperpowers] = useState({
    live: item.superpowers?.live || 100,
    create: item.superpowers?.create || 100,
    love: item.superpowers?.love || 100,
    dream: item.superpowers?.dream || 100,
  });

  const updateSuperpower = (type: keyof typeof superpowers, delta: number) => {
    setSuperpowers((prev) => ({
      ...prev,
      [type]: Math.max(0, prev[type] + delta),
    }));
  };

  // Обновляем superpowers в item при изменении
  React.useEffect(() => {
    item.superpowers = superpowers;
  }, [superpowers, item]);
  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={handleCloseModal}
    >
      <div className="bg-white rounded-2xl max-w-91 w-full overflow-hidden shadow-xl relative">
        {/* Кнопка-крестик в правом верхнем углу */}
        <button
          onClick={handleCloseModal}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors z-10"
          aria-label="Close"
        >
          <svg
            className="w-5 h-5 text-gray-500 hover:text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <img src={item.imgUrl} alt={item.title} className="w-full" />

        <div className="p-5">
          <p
            className="text-[16px] font-semibold"
            style={{
              color: tabColors[item.tab as keyof typeof tabColors] || '#FF43F7',
            }}
          >
            {item.tab}
          </p>
          <h3 className="uppercase text-[16px] font-semibold">{item.title}</h3>
          <p className="mt-2 text-gray-600 font-semibold">
            Adds superpowers to:
          </p>
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="flex items-center gap-2">
                <p>Live</p>
                <p className="font-bold text-green-600">+{superpowers.live}</p>
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    updateSuperpower('live', -100);
                  }}
                  className="w-6 h-6 rounded-full bg-red-100 hover:bg-red-200 text-red-600 flex items-center justify-center text-sm font-bold"
                >
                  -
                </button>
                <img src="/snowflake.svg" alt="Snowflake" className="w-4 h-4" />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    updateSuperpower('live', 100);
                  }}
                  className="w-6 h-6 rounded-full bg-green-100 hover:bg-green-200 text-green-600 flex items-center justify-center text-sm font-bold"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center mb-2">
              <span className="flex items-center gap-2">
                <p>Create</p>
                <p className="font-bold text-blue-600">+{superpowers.create}</p>
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    updateSuperpower('create', -100);
                  }}
                  className="w-6 h-6 rounded-full bg-red-100 hover:bg-red-200 text-red-600 flex items-center justify-center text-sm font-bold"
                >
                  -
                </button>
                <img src="/snowflake.svg" alt="Snowflake" className="w-4 h-4" />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    updateSuperpower('create', 100);
                  }}
                  className="w-6 h-6 rounded-full bg-green-100 hover:bg-green-200 text-green-600 flex items-center justify-center text-sm font-bold"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center mb-2">
              <span className="flex items-center gap-2">
                <p>Love</p>
                <p className="font-bold text-pink-600">+{superpowers.love}</p>
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    updateSuperpower('love', -100);
                  }}
                  className="w-6 h-6 rounded-full bg-red-100 hover:bg-red-200 text-red-600 flex items-center justify-center text-sm font-bold"
                >
                  -
                </button>
                <img src="/snowflake.svg" alt="Snowflake" className="w-4 h-4" />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    updateSuperpower('love', 100);
                  }}
                  className="w-6 h-6 rounded-full bg-green-100 hover:bg-green-200 text-green-600 flex items-center justify-center text-sm font-bold"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span className="flex items-center gap-2">
                <p>Dream</p>
                <p className="font-bold text-purple-600">
                  +{superpowers.dream}
                </p>
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    updateSuperpower('dream', -100);
                  }}
                  className="w-6 h-6 rounded-full bg-red-100 hover:bg-red-200 text-red-600 flex items-center justify-center text-sm font-bold"
                >
                  -
                </button>
                <img src="/snowflake.svg" alt="Snowflake" className="w-4 h-4" />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    updateSuperpower('dream', 100);
                  }}
                  className="w-6 h-6 rounded-full bg-green-100 hover:bg-green-200 text-green-600 flex items-center justify-center text-sm font-bold"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
