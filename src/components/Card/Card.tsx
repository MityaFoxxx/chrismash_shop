import type { Gift } from '../../shared/giftsData';
import { tabColors } from '../../shared/giftsData';
import { memo } from 'react';

interface CardProps {
  id: number;
  item: Gift;
  handleClickCard?: (item: Gift) => void;
}

// Оптимизированный компонент Card с React.memo для предотвращения лишних рендеров
export const Card = memo(({ item, handleClickCard }: CardProps) => {
  return (
    <article
      key={item.id}
      className="flex flex-col bg-gray-200 w-77.5 rounded-2xl cursor-pointer overflow-hidden hover:scale-102 transition-transform h-full"
      onClick={() => handleClickCard && handleClickCard(item)}
      role="button"
      tabIndex={0}
      aria-label={`Подарок: ${item.title}. Категория: ${item.tab}. Нажмите для подробной информации`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClickCard && handleClickCard(item);
        }
      }}
    >
      <div className="shrink-0">
        <img
          src={item.imgUrl}
          alt={`${item.title} - подарок в категории ${item.tab}`}
          loading="lazy"
          className="bg-gray-200 w-full aspect-[4/3] object-cover rounded-tl-2xl rounded-tr-2xl"
        />
      </div>

      <div className="px-5 pt-4.5 pb-10 flex flex-col gap-2.5 bg-white flex-1">
        <p
          className="text-[12px] font-semibold tracking-[5%] uppercase m-0"
          style={{
            color: tabColors[item.tab as keyof typeof tabColors] || '#FF43F7',
          }}
        >
          {item.tab}
        </p>

        <h3 className="font-semibold text-[16px] uppercase tracking-[8%] m-0">
          {item.title}
        </h3>
      </div>
    </article>
  );
});

Card.displayName = 'Card';
