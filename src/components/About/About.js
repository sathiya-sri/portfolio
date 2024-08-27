import React, { useContext } from "react";
import "./About.css";
import about_bg_img from "../Assets/about_bg_img.png";
import { Contacts } from "../Data/Data";
import { AboutDetail } from "../Data/Data";
import { ContextApi } from "../ContextApi/ContextApi";
const About = () => {
  const { darkMode } = useContext(ContextApi);
  return (
    <section className={darkMode ? "about" : "about-light"}>
      <div className="about_title">
        <h2>My Info</h2>
        <h1>About Me</h1>
        <hr />
      </div>
      <section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div>
          <img
            src={about_bg_img}
            alt="about"
            className="shadow-md shadow-violet-400 rounded-[2rem] w-[95%] h-[550px] object-cover"
          />
        </div>
        <div className="about_section shadow-md shadow-violet-400 p-8 rounded-[2rem] w-full">
          <h1>Hello I'M Sathiya , Based in India</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quas
            ullam laborum, dolore nihil nemo nulla! Odio sapiente aut quibusdam
            veniam, nostrum vitae harum itaque, error magni corrupti ut dolorum?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full justify-center">
            <section>
              {Contacts.map((contact, index) => {
                return (
                  <div
                    className={darkMode ? "about_detail" : "about_detail-light"}
                    key={index}
                  >
                    <span>{contact.icon}</span>
                    <div className="about_content">
                      <h3>{contact.title}</h3>
                      <p>{contact.content}</p>
                    </div>
                  </div>
                );
              })}
            </section>
            <section>
              {AboutDetail.map((about, index) => {
                return (
                  <div
                    className={darkMode ? "about_detail" : "about_detail-light"}
                    key={index}
                  >
                    <span>{about.icon}</span>
                    <div className="about_content">
                      <h3>{about.title}</h3>
                      <p>{about.content}</p>
                    </div>
                  </div>
                );
              })}
            </section>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
