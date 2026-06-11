"use client";
import React from "react";
import style from "./Footer.module.scss";
import logo from "../../assets/logo.png";
import Image from "next/image";
interface FooterProps {
  companyName?: string;
}

const Footer: React.FC<FooterProps> = ({ companyName = "Моята Компания" }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bg-dark text-light py-5 mt-auto w-100 ${style.footer}`}>
      <hr className="border-secondary my-4 pb-4" />

      <div className="container-fluid">
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <h5 className="text-uppercase mb-3 fw-bold">{companyName}</h5>
            <p className=" small white">
              Твоят доверен домашен майстор в София. Бързи, чисти и качествени
              дребни ремонти, монтажи и техническа поддръжка за твоя дом и офис.
            </p>
          </div>

          <div className="col-6 col-md-4">
            <h5 className="text-uppercase mb-3 fw-bold">Връзки</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#home" className=" text-decoration-none hover-link">
                  Начало
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#services"
                  className=" text-decoration-none hover-link"
                >
                  Услуги
                </a>
              </li>
              <li className="mb-2">
                <a href="#about" className=" text-decoration-none hover-link">
                  За нас
                </a>
              </li>
              <li className="mb-2">
                <a href="#contact" className=" text-decoration-none hover-link">
                  Контакти
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-4">
            <h5 className="text-uppercase mb-3 fw-bold">Контакти</h5>
            <ul className="list-unstyled  small">
              <li className="mb-2">гр. София, Люлин 2</li>
              <li className="mb-2">
                <a href="mailto:tihomirptodorov984@gmail.com">
                  tihomirptodorov984@gmail.com
                </a>
              </li>
              <li className="mb-2">
                <a href="tel:+359 894 376 062">+359 894 376 062</a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        <div className="d-flex flex-column flex-sm-row justify-content-around align-items-center small ">
          <div style={{ maxWidth: 400, width: "100%" }}>
            <p className="mb-2 mb-sm-0">
              &copy; {currentYear} {companyName}. Всички права запазени.
            </p>
          </div>
          <div style={{ maxWidth: 400, width: "100%" }}>
            <Image
              src={logo}
              alt="Footer logo"
              style={{ maxWidth: 100, height: "auto" }}
            />
          </div>
          <div
            className="d-flex gap-3"
            style={{ maxWidth: 400, width: "100%" }}
          >
            <a href="#privacy" className=" text-decoration-none">
              Поверителност
            </a>
            <a href="#terms" className=" text-decoration-none">
              Условия за ползване
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
