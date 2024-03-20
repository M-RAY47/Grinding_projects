import logo from "../logo.svg";
const Navbar = () => {
  const navList = ["Pricing", "About", "Contact"].map((list) => (
    <li key={list}>{list}</li>
  ));
  return (
    <nav>
      <img src={logo} alt="logo" />
      <div className="nav-right">
        <ul className="nav-items">{navList}</ul>
      </div>
    </nav>
  );
};
export default Navbar;
