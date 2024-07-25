import CardProduct from './CardProduct';
import Container from './Container';
import WaveDown from './WaveDown';
import WaveUp from './WaveUp';

const Products = (props) => {
  const { productTitle, products } = props;
  return (
    <div className="flex flex-col items-center justify-center gap-5 ">
      <WaveUp />
      <h1 className="text-3xl font-bold">{productTitle}</h1>
      <Container>
        {/* looping isi card product */}
        {products.map((prod) => (
          <CardProduct
            cardTitle={prod.name}
            image={prod.img}
            altText={prod.name}
          />
        ))}
      </Container>
      <WaveDown />
    </div>
  );
};

export default Products;
