import React, { useContext, useState } from "react";
import "./Card.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { ContextApi } from "../ContextApi/ContextApi";
const Card = () => {
  const {darkMode}=useContext(ContextApi);
  const [count, setCount] = useState(false);
  return (
    <>
      <ScrollTrigger
        onEnter={() => setCount(true)}
        onExit={() => setCount(false)}
      >
        <section className={darkMode?"card":"card-light"}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[50px]">
            <div className={darkMode?"card_section shadow-sm shadow-gray-400":"card_section-light shadow shadow-violet-300"}>
              <span>
                {count && <CountUp start={0} end={70} duration={2} delay={0} />}{" "}
                +
              </span>
              <p>Projects Completed</p>
            </div>
            <div className={darkMode?"card_section shadow-sm shadow-gray-400":"card_section-light shadow shadow-violet-300"}>
              <span>
                {count && <CountUp start={0} end={10} duration={2} delay={0} />}{" "}
                +
              </span>
              <p>Years of Experience</p>
            </div>
            <div className={darkMode?"card_section shadow-sm shadow-gray-400":"card_section-light shadow shadow-violet-300"}>
              <span>
                {count && <CountUp start={0} end={50} duration={2} delay={0} />}{" "}
                +
              </span>
              <p>Total No. of Clients</p>
            </div>
            <div className={darkMode?"card_section shadow-sm shadow-gray-400":"card_section-light shadow shadow-violet-300"}>
              <span>
                {count && <CountUp start={0} end={40} duration={2} delay={0} />}{" "}
                +
              </span>
              <p>Total No. of Awards</p>
            </div>
          </div>
        </section>
      </ScrollTrigger>
    </>
  );
};

export default Card;
