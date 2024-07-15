import { createSignal } from "solid-js";
import {logoNav,} from "../assets/images";
import {navLinks} from "../assets/js/data";

export default function Header(props) {
  const [isActive, setActive] = createSignal(false);

  return (
    <>
      <header
        className={`header ${props.scrollY > 100 && "active"}`}
        data-header
      >
        <div className="container">
          <a href="#" className="logo">
            <img src={logoNav} alt="UTC logo" />
          </a>

          <nav className={`navbar ${isActive() ? "active" : ""}`} data-navbar>
            <div className="wrapper">
              <a href="#" className="logo">
                <img
                  src={logoNav}
                  width="162"
                  height="50"
                  alt="UTC logo"
                />
              </a>

              <button
                className="nav-close-btn"
                aria-label="close menu"
                data-nav-toggler
                onClick={() => setActive(!isActive())}
              >
                <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
              </button>
            </div>
            <ul className="navbar-list">
              {navLinks.map((item, index) => (
                <li className="navbar-item" key={index} onClick={() => setActive(!isActive())}>
                  <a
                    href={`#${item.href}`}
                    className="navbar-link"
                    data-nav-link
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions">
            <a href="#" className="btn has-before">
              <ion-icon name="person-add-outline" aria-hidden="true"></ion-icon>
              <span className="span">Daftar</span>
            </a>
            <a href="#" className="btn-second has-before">
              <ion-icon
                name="arrow-forward-outline"
                aria-hidden="true"
              ></ion-icon>
              <span className="span">Masuk</span>
            </a>

            <button
              className="header-action-btn"
              aria-label="open menu"
              data-nav-toggler
              onClick={() => setActive(!isActive())}
            >
              <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
            </button>
          </div>

          <div
            className={`overlay ${isActive() ? "active" : ""}`}
            data-nav-toggler
            data-overlay
            onClick={() => setActive(!isActive())}
          ></div>
        </div>
      </header>
    </>
  );
}
