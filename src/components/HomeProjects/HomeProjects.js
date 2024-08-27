import React, { useContext } from "react";
import "./HomeProjects.css";
import { FaPlus } from "react-icons/fa";
import { HomeProject } from "../Data/Data.js";
import { MdOutlineArrowForward } from "react-icons/md";
import { ContextApi } from "../ContextApi/ContextApi.js";
const HomeProjects = () => {
  const { darkMode } = useContext(ContextApi);
  return (
    <section className={darkMode ? "project" : "project-light"}>
      <div className="project_title">
        <h2>My Projects</h2>
        <h1>Recent Works</h1>
        <hr />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-x-[70px] gap-y-[50px]">
        {HomeProject.map((project, index) => {
          return (
            <section
              className={darkMode ? "project_img" : "project_img-light"}
              key={index}
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
          );
        })}
      </div>
      <button>
        Click More
        <MdOutlineArrowForward className="project_arrow" />
      </button>
    </section>
  );
};

export default HomeProjects;
