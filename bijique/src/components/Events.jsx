import CardProduct from './CardProduct';
import Container from './Container';
import WaveDown from './WaveDown';
import WaveUp from './WaveUp';

const Events = (props) => {
  const { eventTitle, events } = props;
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <WaveUp />
      <h1 className="text-3xl font-bold">{eventTitle}</h1>
      <Container>
        {events.map((event) => (
          <CardProduct
            cardTitle={event.name}
            image={event.img}
            altText={event.name}
            imgSize="w-[100%] h-[15rem]"
          />
        ))}
      </Container>
      <WaveDown />
    </div>
  );
};

export default Events;
