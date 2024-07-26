const Navbar = (props) => {
  const { logo, navLinks, languages } = props;
  return (
    <nav className="fixed top-0 flex items-center justify-center text-2xl bg-primary w-[100%] z-10">
      <div className="flex items-center justify-between gap-3 w-[90%]">
        <a href="#">
          <img
            className="h-[5rem] w-[10rem] "
            src={logo}
            alt=""
          />
        </a>
        <ul className="flex ">
          {navLinks.map((nav) => (
            <li
              className="p-4 hover:text-secondary"
              key={nav.id}
            >
              <a href={nav.url}>{nav.name}</a>
            </li>
          ))}
        </ul>
        <ul className="flex gap-3">
          {languages.map((lang) => (
            <li key={lang}>
              <a href={`#${lang}`}>{lang}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
