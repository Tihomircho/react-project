// eslint-disable-next-line jsx-a11y/anchor-is-valid
import React, { act, useState } from "react";
import logo from "../../assets/logo.png";
import style from "./Menu.module.scss";
import { NavLink } from "react-router-dom";
const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<string>("home");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <nav
      className={`${style.menu} navbar w-100 navbar-expand-lg bg-body-tertiary`}
    >
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/" onClick={closeMenu}>
          <img src={logo} alt="logo" style={{ maxWidth: 100 }} />
        </NavLink>
        <button
          className="navbar-toggler"
          onClick={toggleMenu}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
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
