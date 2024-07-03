import React from "react";
import SectionTitle from "../sectionTitle/SectionTitle";
import Card from "./Card";

const Projects = () => {
  return (
    <div className="px-3">
      <SectionTitle title="My Projects"></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
};

export default Projects;
