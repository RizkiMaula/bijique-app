const Container = (props) => {
  const { children, layout = 'grid place-content-center lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2' } = props;
  return <div className={`${layout} w-[90%] mx-auto  gap-3`}>{children}</div>;
};

export default Container;
