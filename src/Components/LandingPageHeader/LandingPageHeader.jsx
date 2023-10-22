import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SwapSVG from "../../assets/logo.svg";
import { HambergerMenu, CloseCircle } from "iconsax-react";
import { Button } from "../button/button";
import "./LandingPageHeader.css";

const navLinks = [
  { id: 1, title: "", url: "/" },
  { id: 2, title: "Features", url: "/features" },
  { id: 3, title: "About Us", url: "/about" },
  { id: 4, title: "Contact Us", url: "/contact" },
  { id: 4, title: "Blog", url: "/blog" },
];

const HeaderLogo = () => (
  <div className="logo">
    <NavLink to="/" style={{ textDecoration: "none" }}>
      <img
        width={220}
        height={220}
        src={SwapSVG}
        alt="SVG"
        style={{ paddingTop: "0px", borderRadius: "100px" }}
      />
    </NavLink>
  </div>
);

const LandingPageHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const NavigationLinks = () => (
    <div className={`links-container ${isOpen ? "" : "hidemenu"}`}>
      <div className="closecircle" onClick={handleOpen}>
        <CloseCircle />
      </div>
      <div className="nav__links">
        <nav>
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <NavLink to={link.url}>{link.title}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="nav__buttons">
        <NavLink to="/login">
          <div className="button_1">
            <Button value="Sign in" />
          </div>
        </NavLink>
        <NavLink to="/signup">
          <div className="button_2">
            <button className="btn_create">Create account</button>
          </div>
        </NavLink>
      </div>
    </div>
  );

  return (
    <section className="big__header">
      <div className="containerr">
        <div className="headerr">
          <HeaderLogo />
          <div className="menubar" onClick={handleOpen}>
            <HambergerMenu />
          </div>
          <NavigationLinks />
        </div>
      </div>
    </section>
  );
};

export default LandingPageHeader;
