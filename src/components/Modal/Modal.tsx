import { tabColors, type Gift } from '../../shared/giftsData';

interface ModalProps {
  item: Gift;
  handleCloseModal: () => void;
}

export const Modal = ({ item, handleCloseModal }: ModalProps) => {
  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={handleCloseModal}
    >
      <div className="bg-white rounded-2xl max-w-87.5 w-full overflow-hidden shadow-xl relative">
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
          <p className="mt-2 text-gray-600">Adds superpowers to:</p>
          <div>
            <p>{`Live     +${item.superpowers.live}`}</p>
            <p>{`Create     +${item.superpowers.create}`}</p>
            <p>{`Love     +${item.superpowers.love}`}</p>
            <p>{`Dream     +${item.superpowers.dream}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
