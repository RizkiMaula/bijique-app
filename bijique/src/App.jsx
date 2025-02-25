import './App.css';
import {
  navLinks,
  logoHome,
  languages,
  companyName,
  companyProfile,
  productTitle,
  products,
  marketplaceTitle,
  marketplaces,
  socialTitle,
  socialMedia,
  imgBanner,
  bannerEn,
  bannerId,
  customerTitle,
  customers,
  eventTitle,
  events,
} from './helpers/consts';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Customers from './components/Customers';
import Products from './components/Products';
import Events from './components/Events';

function App() {
  return (
    <div>
      <Navbar
        logo={logoHome}
        navLinks={navLinks}
        languages={languages}
      />
      <Banner imgBanner={imgBanner} />
      <Customers
        customerTitle={customerTitle}
        customers={customers}
      />
      <Products
        productTitle={productTitle}
        products={products}
      />
      <Events
        eventTitle={eventTitle}
        events={events}
      />
      <Footer
        logo={logoHome}
        companyName={companyName}
        companyProfile={companyProfile}
        productTitle={productTitle}
        products={products}
        marketplaceTitle={marketplaceTitle}
        marketplaces={marketplaces}
        socialTitle={socialTitle}
        socialMedia={socialMedia}
      />
    </div>
  );
}

export default App;
