import Button from './Button';

const CardProduct = (props) => {
  const { cardTitle = '....', color = 'bg-secondary', image, altText = 'gambar' } = props;
  return (
    <div className={`flex flex-col items-center  text-center p-10 rounded-lg gap-5 ${color} text-white`}>
      <img
        src={image}
        alt={altText}
        className="w-[10rem] h-[10rem] rounded-full"
      />
      <h1 className="font-bold">{cardTitle}</h1>
      <Button buttonText="Find Out More" />
    </div>
  );
};

export default CardProduct;
