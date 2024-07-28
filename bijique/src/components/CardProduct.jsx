import Button from './Button';

const CardProduct = (props) => {
  const { cardTitle = '....', color = 'bg-secondary', image, imgSize = 'w-[10rem] h-[10rem] rounded-full', altText = 'gambar', key } = props;
  return (
    <div className={`flex flex-col items-center  text-center p-10 rounded-lg gap-5 ${color} text-white`}>
      <img
        src={image}
        alt={altText}
        className={imgSize}
      />
      <h1 className="font-bold">{cardTitle}</h1>
      <Button buttonText="Find Out More" />
    </div>
  );
};

export default CardProduct;
