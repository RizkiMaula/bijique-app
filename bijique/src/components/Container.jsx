const Container = (props) => {
  const { children } = props;
  return <div className="w-[90%] mx-auto flex gap-3">{children}</div>;
};

export default Container;
