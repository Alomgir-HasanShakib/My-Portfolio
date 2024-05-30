import React from "react";
import SectionTitle from "../sectionTitle/SectionTitle";
import Card from "./Card";
import craft from "../../assets/craft-ease.png";
import eventer from "../../assets/eventer.png";
import realState from "../../assets/real-state.png";

const Projects = () => {
  return (
    <div className="px-3">
      <SectionTitle title="Projects"></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16 mb-10">
        <Card
          name="Craft Ease"
          image={craft}
          link="https://craft-ease.web.app/"
        ></Card>
        <Card
          name="Eventer"
          image={eventer}
          link="https://eventer-9064e.web.app/"
        ></Card>
        <Card
          name="Your Homies"
          image={realState}
          link="https://real-estate-projects-b8839.web.app/"
        ></Card>
      </div>
    </div>
  );
};

export default Projects;
