const Customers = (props) => {
  const { customerTitle, customers } = props;
  return (
    <div className="flex flex-col items-center justify-center border-4 border-black py-[10rem] gap-5">
      <h1 className="text-3xl font-bold">{customerTitle}</h1>
      <div className="flex gap-4">
        {customers.map((cust) => (
          /* card, nanti diganti */
          <div className="flex flex-col items-center  text-center p-10 rounded-lg gap-5 bg-secondary text-white">
            <img
              src={cust.img}
              alt="poto customer"
              className="w-[10rem] h-[10rem] rounded-full"
            />
            <h1>{cust.name}</h1>
            <h1>{cust.review}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customers;
