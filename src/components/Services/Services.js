import React, { useContext } from "react";
import "./Services.css";
import { services } from "../Data/Data";
import {ContextApi} from "../ContextApi/ContextApi.js";
const Services = () => {
  const {darkMode}=useContext(ContextApi);
  return (
    <section className={ darkMode ? "service" : "service-light"}>
      <div className="service_title">
        <h2>My Services</h2>
        <h1>What I Offer</h1>
        <hr />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mb-10 lg:mb-0 items-center gap-x-[70px] gap-y-[50px">
        {services.map((service, index) => {
          return (
            <section key={index} className={ darkMode ? "service_img" : "service_img-light"}>
              <span>{service.icon}</span>
              <h1>{service.title}</h1>
              <p>{service.content}</p>
            </section>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
