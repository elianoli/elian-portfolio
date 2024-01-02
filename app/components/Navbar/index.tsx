const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <h2 className="text-3xl text-white">
          <a href="#">./&nbsp;elian</a>
        </h2>
        <div className="hidden md:block">
          <ul className="links">
            <a href="#">About</a>
            <a href="#">Projects</a>
            <a href="#">Contact</a>
          </ul>
        </div>
        <button className="btn">Hire&nbsp;me</button>
      </nav>
    </>
  );
};

export default Navbar;
