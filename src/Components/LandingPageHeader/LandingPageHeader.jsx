import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./LandingPageHeader.css";
import logoLandingPage from "../../assets/swaplogo.png";
import { Button } from "../button/button";
import { Link } from "react-router-dom";
import { HambergerMenu } from "iconsax-react";
import { CloseCircle } from "iconsax-react";
import Swap from "../../assets/logo.svg";
const LandingPageHeader = () => {
  const navLinks = [
    { id: 1, title: "", url: "/" },
    { id: 2, title: "Services", url: "/services" },
    { id: 3, title: "About Us", url: "/about" },
    { id: 4, title: "Contact Us", url: "/contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="big__header">
      <div className="containerr">
        <div className="headerr">
          <div className="logo">
            <a href="/" style={{ textDecoration: "none" }}>
              <img
                width={220}
                height={220}
                src={Swap}
                alt="SVG"
                style={{ paddingTop: "0px", borderRadius: "100px" }}
              />
            </a>
          </div>
          <div
            className={isOpen ? "links-container" : "links-container hidemenu"}
          >
            <div className="closecircle" onClick={handleOpen}>
              <CloseCircle />
            </div>
            <div className="nav__links">
              <nav>
                <ul>
                  {navLinks.map((link) => (
                    <li key={link.id}>
                      <a href={link.url}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="nav__buttons">
              <Link to="/login">
                <div className="button_1">
                  <Button value="Sign in" />
                </div>
              </Link>
              <Link to="signup">
                <div className="button_2">
                  <Button value="Create Account" />
                </div>
              </Link>
            </div>
          </div>
          <div className="menubar" onClick={handleOpen}>
            <HambergerMenu />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPageHeader;
