interface SliderItemProps {
  item: {
    id: number;
    title: string;
    imgUrl: string;
  };
}

export const SliderItem = ({ item }: SliderItemProps) => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 px-4">
      <p className="uppercase text-4xl sm:text-6xl md:text-[80px] text-white text-center leading-tight">
        {item.title}
      </p>
      <img
        src={item.imgUrl}
        alt={item.title}
        loading="lazy"
        className="w-full max-w-[200px] sm:max-w-[300px] md:max-w-md h-auto object-contain rounded-2xl"
      />
    </div>
  );
};
