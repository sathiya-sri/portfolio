import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import "./Banner.css";
import { ReactTyped } from "react-typed";
import HI_img from "../Assets/HI_img.png";

const Banner = () => {
  return (
    <section className='banner lg:pt-0 pt-20'>
      <div>
        <h2 className="banner_title">
          HELLO ,
            <img
              src={HI_img}
              alt="Hi"
              className="banner_icon"
            />
          THERE
        </h2>
      </div>
      <h1 className="banner_title2">
        I'M
        <span>
          <ReactTyped
            strings={[
              "Sathiya",
              "a FullStack Developer..",
              "a UI/UX Designer..",
              "a Programmer in java..",
            ]}
            typeSpeed={50}
            backSpeed={50}
            loop={true}
          />
        </span>
      </h1>
      <h3>Follow Me on</h3>
      <div className="banner_socialmedia_icon">
        <span><FaLinkedinIn /></span>
        <span><IoLogoWhatsapp /></span>
        <span><RiTwitterXFill /></span>
        <span><FaFacebookF /></span>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
      <button>Download Resume</button>
    </section>
  );
};

export default Banner;
