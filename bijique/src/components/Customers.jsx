import CardCust from './CardCust';
import Container from './Container';

const Customers = (props) => {
  const { customerTitle, customers } = props;
  return (
    <div className="flex flex-col items-center justify-center pt-[10rem] gap-5">
      <h1 className="text-3xl font-bold">{customerTitle}</h1>
      {/* container, diganti juga nanti */}
      <Container>
        {/* looping isi card customer */}
        {customers.map((cust) => (
          <CardCust
            cardTitle={cust.name}
            image={cust.img}
            altText={cust.name}
            review={cust.review}
          />
        ))}
      </Container>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#50a41c"
          fill-opacity="1"
          d="M0,96L80,80C160,64,320,32,480,58.7C640,85,800,171,960,170.7C1120,171,1280,85,1360,42.7L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Customers;

/**{customers.map((cust) => (
          // card, nanti diganti 
          <div className="flex flex-col items-center gap-5 p-10 text-center text-white rounded-lg bg-secondary">
            <img
              src={cust.img}
              alt="poto customer"
              className="w-[10rem] h-[10rem] rounded-full"
            />
            <h1 className="font-bold">{cust.name}</h1>
            <h1 className="text-sm">{cust.review}</h1>
          </div>
        ))} */
