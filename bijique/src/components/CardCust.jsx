const CardCust = (props) => {
  const { cardTitle = '....', color = 'bg-secondary', image, altText = 'gambar', review } = props;
  return (
    <div className={`flex flex-col items-center text-center lg:p-7 md:p-5 sm:p-3 rounded-lg gap-5 ${color} text-white lg:w-[18rem] md:w-[14rem] border-4 border-black`}>
      <img
        src={image}
        alt={altText}
        className="w-[10rem] h-[10rem] rounded-full"
      />
      <h1 className="font-bold">{cardTitle}</h1>
      <p className="text-sm">{review}</p>
    </div>
  );
};

export default CardCust;
