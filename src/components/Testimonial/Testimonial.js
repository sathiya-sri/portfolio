import React, { useContext } from "react";
import "./Testimonial.css";
import { testimonial } from "../Data/Data";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import {ContextApi} from "../ContextApi/ContextApi.js";
const Testimonial = () => {
  const {darkMode}=useContext(ContextApi);
  return (
    <section className={ darkMode ? "testimonial": "testimonial-light"}>
      <div className="testimonial_title">
        <h2>MY Testimonials</h2>
        <h1>What Our Client's Says</h1>
        <hr />
      </div>
      <div className="w-[100%] grid grid-cols-1 gap-20 mb-10 md:grid-cols-2 lg:grid-cols-2">
        {testimonial.map((testimonial, index) => {
          return (
            <div className="w-[100%] flex items-center justify-center">
              <div className={darkMode ? "testimonial_flex" : "testimonial_flex-light" } key={index}>
                <div className="testimonial_section">
                  <div className="testimonial_card">
                    <div className="testimonial_profile">
                      <img src={testimonial.img} alt="customers" />
                      <div>
                        <h3>{testimonial.title}</h3>
                        <p>Web Designer</p>
                      </div>
                    </div>
                    <p>{testimonial.content}</p>
                  </div>
                </div>
                <div className="testimonial_sidebar">
                    <span><FaArrowUp /></span>
                    <span><FaArrowDown /></span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonial;

/* 
  {testimonial.map((testimonial, index) => {
          return (
            <>
              <div className="testimonial_flex" key={index}>
                <SplideSlide className="testimonial_section">
                  <div className="testimonial_card">
                    <div className="testimonial_profile">
                      <img src={testimonial.img} alt="customers" />
                      <div>
                        <h3>{testimonial.title}</h3>
                        <p>Web Designer</p>
                      </div>
                    </div>
                    <p>{testimonial.content}</p>
                  </div>
                </SplideSlide>
                <div className="testimonial_sidebar"></div>
              </div>
            </>
          );
        })}
  
  */
