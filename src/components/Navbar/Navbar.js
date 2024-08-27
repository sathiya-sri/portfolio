import React, { useContext } from "react";
import {  NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "../Navbar/Navbar.css";
import ThemeButton from "../ThemeButton/ThemeButton.js";
import { ContextApi } from "../ContextApi/ContextApi.js";
import { BsFillBriefcaseFill } from "react-icons/bs";
const Navbar = () => {
  const { darkMode } = useContext(ContextApi);
  const navlist = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Portfolio", link: "/portfolio" },
    { title: "Contact", link: "/contact" },
    { title: "Blog", link: "/blog" },
  ];
  return (
    <section className={darkMode ? "navbar" : "navbar-light"}>
      <h6 className="logo">
        <BsFillBriefcaseFill className="mr-2 text-[16px]" />
        Portfo<span>lio</span>
      </h6>
      <ul className={darkMode ? "navbar-dark_ul" : "navbar-light_ul"}>
        {navlist.map((nav, index) => {
          return (
            <li key={index}>
              <NavLink to={nav.link} activeClassName="active">
                {nav.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <div className={darkMode ? "search_bar-dark" : "search_bar-light"}>
        <input type="text" placeholder="search here..." autoFocus />
        <FaSearch className="search_icon" />
      </div>
      <ThemeButton />
    </section>
  );
};

export default Navbar;
