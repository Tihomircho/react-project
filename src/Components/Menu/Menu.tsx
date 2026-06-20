// eslint-disable-next-line jsx-a11y/anchor-is-valid
"use client";
import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import style from "./Menu.module.scss";
import Image from "next/image";
// import Link from "next/link";
import { Link, usePathname } from "../../i18n/routing";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useTranslations } from "next-intl";
const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScroll] = useState<number>(0);
  const pathname = usePathname();
  const t = useTranslations("Navbar");
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
      className={`${style.menu} ${scrollClass} py-0 navbar w-100 navbar-expand-lg`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" href="/" onClick={closeMenu}>
          <Image
            src={logo}
            alt="logo"
            style={{ maxWidth: 100, height: "auto" }}
          />
        </Link>
        <div className=" d-lg-none d-block">
          <LanguageSwitcher />
        </div>
        <div
          className={`navbar-toggler ${style.menuBtn} ${isOpen ? style.open : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div
          className={`collapse navbar-collapse  ${isOpen ? "show" : ""}`}
          id="navbarNav"
          style={{ justifyContent: "space-between" }}
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className={`nav-link ${pathname === "/" ? "active" : ""}`}
                aria-current={pathname === "/" ? "page" : undefined}
                onClick={closeMenu}
                href="/"
              >
                {t("home")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${pathname === "/gallery" ? "active" : ""}`}
                onClick={closeMenu}
                href="/gallery"
              >
                {t("gallery")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${pathname === "/ceni" ? "active" : ""}`}
                onClick={closeMenu}
                href="/ceni"
              >
                {t("prices")}
              </Link>
            </li>
          </ul>
        </div>
        <div className=" d-lg-block d-none">
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};
export default Menu;
