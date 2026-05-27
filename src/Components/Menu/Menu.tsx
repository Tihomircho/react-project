// eslint-disable-next-line jsx-a11y/anchor-is-valid
import React from "react";
import logo from "../../assets/logo.png";
const Menu: React.FC = () => {
  return (
    <nav className="navbar w-100 navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="http://#">
          <img src={logo} alt="logo" style={{ maxWidth: 100 }} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="http://#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                aria-disabled="true"
                href="http://#"
              >
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Menu;
