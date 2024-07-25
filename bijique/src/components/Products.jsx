const Products = (props) => {
  const { productTitle, products } = props;
  return (
    <div className="flex flex-col items-center justify-center border-4 border-black py-[10rem] gap-5">
      <h1 className="text-3xl font-bold">{productTitle}</h1>
      <div className="flex gap-4">
        {products.map((prod) => (
          /* card, nanti diganti */
          <div className="flex flex-col items-center  text-center p-10 rounded-lg gap-5 bg-secondary text-white">
            <img
              src={prod.img}
              alt="poto product"
              className="w-[10rem] h-[10rem] rounded-full"
            />
            <h1>{prod.name}</h1>
            <a
              href="#"
              className="p-4 border-black rounded-2xl border-3 bg-slate-300  text-black hover:text-white hover:bg-slate-500"
            >
              Find More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
