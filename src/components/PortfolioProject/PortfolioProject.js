import React, { useContext, useState } from "react";
import "./PortfolioProject.css";
import { PortfolioProjects } from "../Data/Data.js";
import { FaPlus } from "react-icons/fa";
import { MdOutlineArrowForward } from "react-icons/md";
import Popup from "../Popup/Popup.js";
import { ContextApi } from "../ContextApi/ContextApi.js";

const PortfolioProject = () => {
  const { darkMode } = useContext(ContextApi);
  const [project, setProject] = useState(PortfolioProjects);
  const [popup, setPopup] = useState(false);
  const [popedproject, setPopedProject] = useState("");
  const handleClick = (category) => {
    const update = PortfolioProjects.filter((project) => {
      return project.name === category;
    });
    if (category === "ALL") {
      setProject(PortfolioProjects);
    } else {
      setProject(update);
    }
  };
  return (
    <section className={darkMode ? "project" : "project-light"}>
      <div className="project_title mt-20 md:mt-5 lg:mt-0">
        <h2>My Projects</h2>
        <h1>Recent Works</h1>
        <hr />
      </div>
      <section>
        <div className={darkMode ? "searchbar" : "searchbar-light"}>
          <button className="all" onClick={() => handleClick("ALL")}>
            ALL
          </button>
          <button onClick={() => handleClick("Web Design")}>
            Web Design
          </button>
          <button onClick={() => handleClick("App Design")}>
            App Design
          </button>
          <button  onClick={() => handleClick("ui/ux Design")}>
            ui/ux Design
          </button>
        </div>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[70px] gap-y-[50px]">
        {project.map((project, index) => {
          return (
            <div key={index}>
              <section
                className={darkMode ? "project_img" : "project_img-light"}
                onClick={() => {
                  setPopup(true);
                  setPopedProject(project);
                }}
              >
                <img src={project.img} alt="project" />
                <h1>{project.name}</h1>
                <h2>
                  {project.link}
                  <MdOutlineArrowForward className="project_arrow" />
                </h2>
                <span>
                  <FaPlus className="project_icon" />
                </span>
              </section>

              <Popup trigger={popup} setTrigger={setPopup}>
                <section className="grid grid-cols-1 lg:grid-cols-2 place-content-center justify-center items-center">
                  <div>
                    <img
                      src={popedproject.img}
                      alt="popupimg"
                      className="h-[17rem] w-full inline-block items-start justify-start p-2"
                    />
                  </div>
                  <div className="flex flex-col lg:w-[80%] gap-x-8 gap-y-[0.2rem]">
                    <h5
                      className={
                        darkMode
                          ? "color text-[14px] px-2"
                          : "color-light text-[14px] px-2"
                      }
                    >
                      Featured - {popedproject.name}
                    </h5>
                    <h3
                      className={
                        darkMode
                          ? " text-[#fff]  px-2 text-[18px] font-semibold text-left"
                          : "text-[#000] px-2 text-[18px] font-semibold text-left"
                      }
                    >
                      Featured - {popedproject.desc_title}
                    </h3>
                    <p
                      className={
                        darkMode
                          ? "color text-[11px] px-2"
                          : "color-light text-[11px] px-2"
                      }
                    >
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Ad iure, ex, ab incidunt totam tenetur aliquid obcaecati
                      maxime odio sint dolores libero illum necessitatibus porro
                      natus vitae.
                    </p>
                    <h5
                      className={
                        darkMode
                          ? "color text-[13px] px-2"
                          : "color-light text-[13px] px-2"
                      }
                    >
                      Created at 22 Aug 2024
                    </h5>
                    <h5
                      className={
                        darkMode
                          ? "color text-[13px] px-2"
                          : "color-light text-[13px] px-2"
                      }
                    >
                      Technologies - {popedproject.tech}
                    </h5>
                    <h5
                      className={
                        darkMode
                          ? "color text-[13px] px-2"
                          : "color-light text-[13px] px-2"
                      }
                    >
                      Role - FrontEnd
                    </h5>
                    <h5
                      className={
                        darkMode
                          ? "color text-[13px] px-2 flex items-center gap-1"
                          : "color-light text-[13px] px-2 flex items-center gap-1"
                      }
                    >
                      View - <h2 className="underline">www.domain.com</h2>
                    </h5>
                  </div>
                </section>
              </Popup>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PortfolioProject;
