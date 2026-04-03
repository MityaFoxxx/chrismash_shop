import type { Gift } from '../../shared/giftsData';
import { tabColors } from '../../shared/giftsData';

interface CardProps {
  id: number;
  item: Gift;
}
export const Card = ({ item }: CardProps) => {
  return (
    <article
      key={item.id}
      className="flex flex-col bg-gray-200 w-77.5 rounded-2xl overflow-hidden"
    >
      <div className="shrink-0">
        <img
          src={item.imgUrl}
          alt={item.title}
          className="bg-gray-200 w-full rounded-tl-2xl rounded-tr-2xl"
        />
      </div>

      <div className="px-5 pt-4.5 pb-10 flex flex-col gap-2.5 bg-white grow">
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
};
