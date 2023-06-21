import logo from "../logo.svg";
const Navbar = () => {
  const style = {
    gap: "20px",
  };
  return (
    <nav className="{style}">
      <img className="" src={logo} />

      <div className="nav-right">
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;

