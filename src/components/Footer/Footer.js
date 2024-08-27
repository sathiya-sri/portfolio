import React, { useContext } from "react";
import "./Footer.css";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import {Link} from "react-router-dom";
import {ContextApi} from "../ContextApi/ContextApi.js";
const Footer = () => {
  const navlist = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Portfolio", link: "/portfolio" },
    { title: "Contact", link: "/contact" },
    { title: "Blog", link: "/blog" },
  ];
  const {darkMode}=useContext(ContextApi);
  return (
    <section className={ darkMode ? "footer": "footer-light"}>
      <div className="footer_socialmedia_icon">
        <span>
          <FaLinkedinIn />
        </span>
        <span>
          <IoLogoWhatsapp />
        </span>
        <span>
          <RiTwitterXFill />
        </span>
        <span>
          <FaFacebookF />
        </span>
        <span>
          <AiFillInstagram />
        </span>
      </div>
      <ul>
        {navlist.map((nav, index) => {
          return (
            <li key={index}>
              <Link to={nav.link} className="Link">{nav.title}</Link>
            </li>
          );
        })}
      </ul>
      <p className="glow">&copy; 2024 All Right Reserved.</p>
    </section>
  );
};

export default Footer;
