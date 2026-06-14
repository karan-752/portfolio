import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Karan Gupta</h2>

      <ul
        style={{
          display: "flex",
          gap: "20px",
          listStyle: "none",
          padding: 0,
        }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/projects">Projects</Link>
        </li>

        <li>
          <Link to="/experience">Experience</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;