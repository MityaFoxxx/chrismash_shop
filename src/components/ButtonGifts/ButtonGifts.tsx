import { useNavigate } from 'react-router-dom';

export const ButtonGifts = () => {
  const navigate = useNavigate();
  return (
    <button
      className="px-6 text-white  rounded-[20px] bg-[#181C29] hover:bg-[#151820] cursor-pointer w-58.75 h-14"
      onClick={() => navigate('/gifts')}
    >
      Explore Magical Gifts
    </button>
  );
};
