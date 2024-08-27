import React, { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import "./Popup.css";
import { ContextApi } from "../ContextApi/ContextApi.js";
const Popup = (props) => {
  const { darkMode } = useContext(ContextApi);
  return props.trigger ? (
    <section className={darkMode ? "popup" : "popup-light"}>
      <div className="popup-inner  max-w-[360px] p-[20px] sm:p-[28px] sm:max-w-[400px]  md:max-w-[500px] lg:max-w-[750px] w-[100%] md:p-[32px] lg:p-[32px]">
        <button
          className="popup-close-icon m-2"
          onClick={() => props.setTrigger(false)}
        >
          <IoMdClose className="close-icon" />
        </button>
        {props.children}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Popup;
