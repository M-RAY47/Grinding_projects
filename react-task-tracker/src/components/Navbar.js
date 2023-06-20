import logo from "../logo.svg";
const Navbar = () => {
  return (
    <nav className="{style}">
      <img className="" src={logo} />

      <div className="nav-right">
        <ul>
          <li>Learn</li>
          <li>Learn React</li>
          <li>Learn</li>
          <li>Learn</li>
        </ul>
      </div>
    </nav>
  );
};
const style = {
  gap: "20px",
};
export default Navbar;

