// eslint-disable-next-line jsx-a11y/anchor-is-valid
import React, { act, useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import style from "./Menu.module.scss";
import { NavLink } from "react-router-dom";
const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScroll] = useState<number>(0);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currnetScrollY = window.scrollY;

      if (currnetScrollY > lastScrollY && currnetScrollY > 80) {
        setIsVisible(false);
        setIsOpen(false);
      } else {
        setIsVisible(true);
      }
      setLastScroll(currnetScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  const scrollClass = isVisible ? style.visible : style.hidden;
  return (
    <nav
      className={`${style.menu} ${scrollClass} navbar w-100 navbar-expand-lg`}
    >
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/" onClick={closeMenu}>
          <img src={logo} alt="logo" style={{ maxWidth: 100 }} />
        </NavLink>
        <div
          className={`navbar-toggler ${style.menuBtn} ${isOpen ? style.open : ""}`}
          onClick={toggleMenu}

          // aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                onClick={closeMenu}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" onClick={closeMenu} to="/features">
                Features
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" onClick={closeMenu} to="/pricing">
                Pricing
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Menu;
