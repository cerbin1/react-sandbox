import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div>
        <Link className="navbar-item" to="/">
          Powrót do listy projektów
        </Link>
      </div>
    </div>
  );
}
