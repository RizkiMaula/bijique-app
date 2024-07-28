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
      <Container layout="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {events.map((event) => (
          <CardProduct
            cardTitle={event.name}
            image={event.img}
            altText={event.name}
            imgSize="w-[50rem] h-[15rem] border-4 border-black"
          />
        ))}
      </Container>
      <WaveDown />
    </div>
  );
};

export default Events;
