import React from "react";
import About from "../components/About/About";
import Card from "../components/Card/Card";
import SkillBar from "../components/SkillBar/SkillBar";
import TimeLine from "../components/TimeLine/TimeLine";

const AboutPage = () => {
  return(
    <section>
        <About/>
        <Card/>
        <SkillBar/>
        <TimeLine/>
    </section>
  )
};

export default AboutPage;
