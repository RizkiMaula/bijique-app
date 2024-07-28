import logo from '../assets/logo.png';
import banner from '../assets/bannerImg.jpg';
import joko from '../assets/bapak-ibu-joko.jpg';
import rahmat from '../assets/rahmat-mewing.jpg';
import jupri from '../assets/jupri-daon.jpg';
import duleh from '../assets/duleh-pupuk.jpg';
import seeds from '../assets/seeds.jpg';
import bonsais from '../assets/bonsai.jpg';
import gardening from '../assets/gardening.jpg';
import fertilizer from '../assets/fertilizer.jpg';
import pot from '../assets/pot.jpg';
import event1 from '../assets/event1.jpg';
import event2 from '../assets/event2.jpg';
import event3 from '../assets/event3.jpg';

const navLinks = [
  {
    id: 1,
    name: 'Home',
    url: '#home',
  },
  {
    id: 2,
    name: 'Products',
    url: '#products',
  },
  {
    id: 3,
    name: 'Events',
    url: '#Events',
  },
];

const navLinksId = [
  {
    id: 1,
    name: 'Beranda',
    url: '#home',
  },
  {
    id: 2,
    name: 'Produk',
    url: '#products',
  },
  {
    id: 3,
    name: 'Kegiatan',
    url: '#Events',
  },
];

const companyName = 'PT Bijique Senang Bersama';
const companyProfile = [
  {
    id: 1,
    name: 'Jl. Baba Miing No.1 Jakarta Timur 10110',
  },
  {
    id: 2,
    name: '081234567890',
  },
  {
    id: 3,
    name: 'nanem@bijique.com',
  },
];

const logoHome = logo;
const languages = ['EN', 'ID'];

const productTitle = 'Product';
const products = [
  {
    id: 1,
    name: 'Seeds',
    url: '#',
    img: seeds,
  },
  {
    id: 2,
    name: 'Gardening Tools',
    url: '#',
    img: gardening,
  },
  {
    id: 3,
    name: 'Fertilizer',
    url: '#',
    img: fertilizer,
  },
  {
    id: 4,
    name: 'Pots & Planters',
    url: '#',
    img: pot,
  },
  {
    id: 5,
    name: 'Bonsai trees',
    url: '#',
    img: bonsais,
  },
];

const productTitleId = 'Product';
const productsId = [
  {
    id: 1,
    name: 'Bibit',
    url: '#',
    img: seeds,
  },
  {
    id: 2,
    name: 'Peralatan Kebun',
    url: '#',
    img: gardening,
  },
  {
    id: 3,
    name: 'Pupuk',
    url: '#',
    img: fertilizer,
  },
  {
    id: 4,
    name: 'Pot & Media Tanam',
    url: '#',
    img: pot,
  },
  {
    id: 5,
    name: 'Pohon Bonsai',
    url: '#',
    img: bonsais,
  },
];

const socialTitle = 'Social Media';
const socialMedia = [
  {
    id: 1,
    name: 'Instagram',
    url: 'https://www.instagram.com/',
  },
  {
    id: 2,
    name: 'Facebook',
    url: 'https://www.facebook.com/',
  },
  {
    id: 3,
    name: 'X',
    url: 'https://www.X.com/',
  },
  {
    id: 4,
    name: 'Tiktok',
    url: 'https://www.tiktok.com/',
  },
];

const marketplaceTitle = 'Marketplace';
const marketplaces = [
  {
    id: 1,
    name: 'Tokopedia',
    url: 'https://www.tokopedia.com/',
  },
  {
    id: 2,
    name: 'Shopee',
    url: 'https://www.shoopee.co.id/',
  },
  {
    id: 3,
    name: 'Blibli',
    url: 'https://www.blibli.com/',
  },
  {
    id: 4,
    name: 'Bukalapak',
    url: 'https://www.bukalapak.com/',
  },
];

const bannerEn = [`Gardeners' Paradise`, 'Bloom with Us!'];
const bannerId = ['Hijauan Terindah', 'Bergabung dengan Kami!'];
const imgBanner = banner;

const customerTitle = 'Our Happy Customers';
const customers = [
  {
    id: 1,
    name: 'Rahmat Sigma',
    img: rahmat,
    review: 'Good product and make my garden more beautiful',
  },
  {
    id: 2,
    name: 'Joko Family',
    img: joko,
    review: 'Bagus Barangnya RAwr',
  },
  {
    id: 3,
    name: 'Duleh Pupuk',
    img: duleh,
    review: 'Pohon Saya jadi berbuah pisang, padahal pohon pepaya ',
  },
  {
    id: 4,
    name: 'Jupri Daon',
    img: jupri,
    review: 'Good product and make my garden more beautiful',
  },
  {
    id: 5,
    name: 'Jupri Daon',
    img: jupri,
    review: 'Good product and make my garden more beautiful',
  },
];

const eventTitle = 'Events';
const events = [
  {
    id: 1,
    name: 'Garden Festival',
    img: event1,
  },
  {
    id: 2,
    name: 'How to Make a Beautiful Garden At Home',
    img: event2,
  },
  {
    id: 3,
    name: 'Garden For Beginners',
    img: event3,
  },
];

export { navLinks, logoHome, languages, companyName, companyProfile, productTitle, products, marketplaceTitle, marketplaces, socialTitle, socialMedia, imgBanner, bannerEn, bannerId, customerTitle, customers, eventTitle, events };
