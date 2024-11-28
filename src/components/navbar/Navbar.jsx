import { Link } from "react-router-dom";
import logo from '../../assets/images/logo-light.png';

export default function Navbar() {
  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <Link to="/">
            <img
              src={logo}
              alt="SimpleBlog logo"
              width="150"
            />
          </Link>

          <div className="btn-group">
            <button className="theme-btn theme-btn-mobile light">
              <ion-icon name="moon" className="moon"></ion-icon>
              <ion-icon name="sunny" className="sun"></ion-icon>
            </button>

            <button className="nav-menu-btn">
              <ion-icon name="menu-outline"></ion-icon>
            </button>
          </div>

          <div className="flex-wrapper">
            <ul className="desktop-nav">
              <li>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="nav-link">
                  About Me
                </Link>
              </li>

              <li>
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>

            <button className="theme-btn theme-btn-desktop light">
              <ion-icon name="moon" className="moon"></ion-icon>
              <ion-icon name="sunny" className="sun"></ion-icon>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
