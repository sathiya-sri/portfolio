import React, { useContext } from "react";
import "./Contact.css";
import { Contacts } from "../Data/Data";
import { SiMinutemailer } from "react-icons/si";
import { ContextApi } from "../ContextApi/ContextApi.js";
const Contact = () => {
  const { darkMode } = useContext(ContextApi);
  return (
    <section className={darkMode ? "contact" : "contact-light"}>
      <div className="contact_title lg:py-0 pt-20">
        <h1>Connect with Us</h1>
        <hr />
        <p>We would like to respond you and feel free to ask any queries...</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 contact_section  lg::mx-16 lg:my-5">
        <section>
          {Contacts.map((contact, index) => {
            return (
              <div
                className={
                  darkMode
                    ? "contact_detail ml-0 md:ml-44 lg:ml-20 sm:ml-48"
                    : "contact_detail-light flex ml-0 md:ml-44 lg:ml-20 sm:ml-48"
                }
              >
                <span className="w-[50px] h-[50px] rounded-full text-white bg-[#e39ff6] border-[1.5px] border-[#e39ff6] cursor-pointer flex items-center justify-center relative group hover:-translate-y-3 hover:bg-black transition-all">
                  {contact.icon}
                </span>
                <div className="contact_content">
                  <h3>{contact.title}</h3>
                  <p>{contact.content}</p>
                </div>
              </div>
            );
          })}
        </section>

        <section
          className={
            darkMode
              ? "contact_form my-20 lg:my-0"
              : "contact_form-light my-20 lg:my-0"
          }
        >
          <form action="">
            <div className="flex justify-center items-center gap-[10xp] lg:gap-[50px] relative w-full lg:w-auto flex-col lg:flex-row">
              <input
                type="text"
                placeholder="Full Name"
                className="lg:w-[260px] lg:h-[50px] w-full"
              />
              <input
                type="email"
                placeholder="Email"
                className="lg:w-[260px] lg:h-[50px]  w-full"
              />
            </div>
            <input type="text" placeholder="subject" />
            <textarea
              rows="4"
              cols="50"
              placeholder="Write the Messages..."
            ></textarea>
            <button>
              send <SiMinutemailer />
            </button>
          </form>
        </section>
      </div>
    </section>
  );
};

export default Contact;
