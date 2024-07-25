const Button = (props) => {
  const { buttonText = '....', classname = 'bg-slate-300 text-black hover:text-white hover:bg-slate-500' } = props;
  return (
    <a
      href="#"
      className={`p-4 border-black rounded-2xl border-5 ${classname}`}
    >
      {buttonText}
    </a>
  );
};

export default Button;
