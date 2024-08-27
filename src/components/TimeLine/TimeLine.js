import React, { useContext } from "react";
import { RiCalendarLine } from "react-icons/ri";
import "./TimeLine.css";
import { ContextApi } from "../ContextApi/ContextApi.js";
const TimeLine = () => {
  const { darkMode } = useContext(ContextApi);
  return (
    <section className={darkMode ? "timeline" : "timeline-light"}>
      <div className="service_title">
        <h2>My Journey</h2>
        <h1>Experience and Education</h1>
        <hr />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full items-center justify-center gap-10 mb-10 ">
        <div className="flex flex-col items-start p-5  sm:p-10 md:p-10 lg:p-10 gap-20">
          <section className="timeline_section my-10">
            <div className="timeline_line">
              <div className="div"></div>
              <span className="span"></span>
              <div
                className={darkMode ? "timeline_card" : "timeline_card-light"}
              >
                <h1>XYZ Company</h1>
                <p>Role : Frontend Developer</p>
                <strong>
                  <span>
                    <RiCalendarLine size={22} />
                  </span>
                  2026-2030
                </strong>
              </div>
            </div>
          </section>

          <section className="timeline_section  my-10">
            <div className="timeline_line">
              <div className="div"></div>
              <span className="span"></span>
              <div
                className={darkMode ? "timeline_card" : "timeline_card-light"}
              >
                <h1>XYZ Company</h1>
                <p>Role : Frontend Developer</p>
                <strong>
                  <span>
                    <RiCalendarLine size={22} />
                  </span>
                  2026-2030
                </strong>
              </div>
            </div>
          </section>
          <section className="timeline_section  my-10">
            <div className="timeline_line">
              <div className="div"></div>
              <span className="span"></span>
              <div
                className={darkMode ? "timeline_card" : "timeline_card-light"}
              >
                <h1>XYZ Company</h1>
                <p>Role : Frontend Developer</p>
                <strong>
                  <span>
                    <RiCalendarLine size={22} />
                  </span>
                  2026-2030
                </strong>
              </div>
            </div>
          </section>
        </div>
        <div className="flex flex-col items-start  p-5 sm:p-10 md:p-10 lg:p-10 gap-20">
          <section className="timeline_section my-10">
            <div className="timeline_line">
              <div className="div"></div>
              <span className="span"></span>
              <div
                className={darkMode ? "timeline_card" : "timeline_card-light"}
              >
                <h1>ABC University</h1>
                <p>B.E Computer Science and Design</p>
                <strong>
                  <span>
                    <RiCalendarLine size={22} />
                  </span>
                  2022-2026
                </strong>
              </div>
            </div>
          </section>

          <section className="timeline_section  my-10">
            <div className="timeline_line">
              <div className="div"></div>
              <span className="span"></span>
              <div
                className={darkMode ? "timeline_card" : "timeline_card-light"}
              >
                <h1>ABC University</h1>
                <p>B.E Computer Science and Design</p>
                <strong>
                  <span>
                    <RiCalendarLine size={22} />
                  </span>
                  2022-2026
                </strong>
              </div>
            </div>
          </section>
          <section className="timeline_section  my-10">
            <div className="timeline_line">
              <div className="div"></div>
              <span className="span"></span>
              <div
                className={darkMode ? "timeline_card" : "timeline_card-light"}
              >
                <h1>ABC University</h1>
                <p>B.E Computer Science and Design</p>
                <strong>
                  <span>
                    <RiCalendarLine size={22} />
                  </span>
                  2022-2026
                </strong>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default TimeLine;
