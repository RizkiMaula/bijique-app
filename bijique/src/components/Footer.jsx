import { companyProfile, socialMedia, socialTitle } from '../helpers/consts';

const Footer = (props) => {
  const { companyName, logo, productTitle, products, marketplaceTitle, marketplaces } = props;
  return (
    <footer className="bottom-0 flex flex-col items-center justify-center gap-8 py-4 bg-primary">
      <img
        className="h-[5rem] w-[10rem] "
        src={logo}
        alt="Logo"
      />
      <div className="flex justify-center px-4 gap-5 items-center w-[100%] ">
        <div className="flex flex-col gap-4 p-[3rem] my-4 text-justify">
          <h1 className="text-xl font-bold ">{companyName}</h1>
          <div>
            {companyProfile.map((comp) => (
              <h1 key={comp.id}>{comp.name}</h1>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 p-[3rem] my-4 text-justify ">
          <h1 className="text-xl font-bold ">{productTitle}</h1>
          <div className="flex flex-col">
            {products.map((prod) => (
              <a
                key={prod.id}
                href={prod.url}
              >
                {prod.name}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 p-[3rem] my-4 text-justify">
          <h1 className="text-xl font-bold">{marketplaceTitle}</h1>
          <div className="flex flex-col">
            {marketplaces.map((market) => (
              <a
                key={market.id}
                href={market.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {market.name}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 p-[3rem] my-4 text-justify">
          <h1 className="text-xl font-bold">{socialTitle}</h1>
          <div className="flex flex-col">
            {socialMedia.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-b-2 border-slate-400  w-[100%]" />
      <h4>Copyright © 2024 - The End of the World. All Rights Reserved</h4>
    </footer>
  );
};

export default Footer;
