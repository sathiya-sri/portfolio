import React, { useContext, useEffect } from "react";
import "./SkillBar.css";
import { ContextApi } from "../ContextApi/ContextApi.js";
import { CircularProgress } from "@nextui-org/progress";

const SkillBar = () => {
  const { darkMode } = useContext(ContextApi);
  const [value1, setValue1] = React.useState(0);
  const [value2, setValue2] = React.useState(0);
  const [value3, setValue3] = React.useState(0);
  const [value4, setValue4] = React.useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setValue1((prevCount) => {
        if (prevCount >= 80) {
          clearInterval(intervalId);
        }
        return prevCount + 3;
      });
    }, 100);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setValue2((prevCount) => {
        if (prevCount >= 70) {
          clearInterval(intervalId);
        }
        return prevCount + 3;
      });
    }, 100);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setValue3((prevCount) => {
        if (prevCount >= 85) {
          clearInterval(intervalId);
        }
        return prevCount + 3;
      });
    }, 100);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setValue4((prevCount) => {
        if (prevCount >= 90) {
          clearInterval(intervalId);
        }
        return prevCount + 3;
      });
    }, 100);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section className={darkMode ? "skill" : "skill-light"}>
      <div className="skill_title">
        <h2>My Skills</h2>
        <h1>What I have</h1>
        <hr />
      </div>
      <div className="skill_circle grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 items-center justify-center gap-[70px] p-16 lg:gap-[150px]">
        <CircularProgress
          classNames={{
            svg: "w-40 h-40 drop-shadow-lg",
            indicator: "stroke-[#a32cc4]",
            track: "stroke-purple-200",
          }}
          value={value1}
          label="React"
          size="lg"
          strokeWidth={2.1}
          color="secondary"
          showValueLabel={true}
        />
        <CircularProgress
          classNames={{
            svg: "w-40 h-40 drop-shadow-lg",
            indicator: "stroke-[#a32cc4]",
            track: "stroke-purple-200",
          }}
          value={value2}
          aria-label="Loading..."
          label="Next js"
          size="lg"
          strokeWidth={2.1}
          color="secondary"
          showValueLabel={true}
        />
        <CircularProgress
          classNames={{
            svg: "w-40 h-40 drop-shadow-lg",
            indicator: "stroke-[#a32cc4]",
            track: "stroke-purple-200",
          }}
          value={value3}
          label="Figma"
          size="lg"
          strokeWidth={2.1}
          color="secondary"
          showValueLabel={true}
        />
        <CircularProgress
          classNames={{
            svg: "w-40 h-40 drop-shadow-lg",
            indicator: "stroke-[#a32cc4]",
            track: "stroke-purple-200",
          }}
          value={value4}
          label="Tailwind Css"
          size="lg"
          strokeWidth={2.1}
          color="secondary"
          showValueLabel={true}
        />
      </div>
    </section>
  );
};

export default SkillBar;
