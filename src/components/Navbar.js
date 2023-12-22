import { Link } from "react-router-dom";
const Navbar = ({ show }) => {
  return (
    <div className={show ? "sidenav active" : "sidenav"}>
      <ul>
        <li>
          <Link to="/">1. reverseString</Link>
        </li>
        <li>
          <Link to="/two">2. filterArray</Link>
        </li>
        <li>
          <Link to="/three">3. formatName</Link>
        </li>
        <li>
          <Link to="/four">4. ConditionalRendering</Link>
        </li>
        <li>
          <Link to="/five">5. Counter</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
