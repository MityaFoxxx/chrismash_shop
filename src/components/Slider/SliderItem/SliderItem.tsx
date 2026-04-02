interface SliderItemProps {
  item: {
    id: number;
    title: string;
    imgUrl: string;
  };
}

export const SliderItem = ({ item }: SliderItemProps) => {
  return (
    <>
      <p key={item.id} className="uppercase text-[80px] text-white">
        {item.title}
      </p>
      <img src={item.imgUrl} alt={item.title} className="rounded-2xl" />
    </>
  );
};
