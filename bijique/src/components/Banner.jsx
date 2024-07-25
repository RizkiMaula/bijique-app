import { imgBanner, bannerEn, bannerId } from '../helpers/consts';
import Button from './Button';

const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center border-4 border-black">
      <img
        src={imgBanner}
        alt="Banner"
        className="w-[100%] relative top-0 opacity-[60%]"
      />
      <div className="absolute flex flex-col text-center banner-text bottom-11">
        {bannerEn.map((text) => (
          <h1 className="text-2xl font-bold text-slate-600">{text}</h1>
        ))}
        <Button buttonText="Find Out More" />
      </div>
    </div>
  );
};

export default Banner;
