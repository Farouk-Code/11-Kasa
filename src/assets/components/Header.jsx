import { Link, useLocation } from "react-router-dom";
import logo from "../../images/KasaLogo.png";

const Header = () => {
  /* Obtenir l'emplacement actuelle */
  const location = useLocation();

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo de Kasa" />
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
              À propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
