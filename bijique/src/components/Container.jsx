const Container = (props) => {
  const { children } = props;
  return <div className="w-[90%] mx-auto flex justify-center gap-3">{children}</div>;
};

export default Container;
