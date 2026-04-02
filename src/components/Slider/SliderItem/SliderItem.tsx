interface SliderItemProps {
  item: {
    id: number;
    title: string;
    imgUrl: string;
  };
}

export const SliderItem = ({ item }: SliderItemProps) => {
  return (
    <div className=" m-auto w-full flex flex-col items-center justify-center gap-6 min-h-100">
      <p key={item.id} className="uppercase text-[80px] text-white text-center leading-tight">
        {item.title}
      </p>
      <img src={item.imgUrl} alt={item.title} className="rounded-2xl max-w-md h-auto object-contain" />
    </div>
  );
};
