import React from "react";
import "./Programs.css";
import { programsData } from "../../../src/data/programsData";
import right_arrow from "../../assets/rightArrow.png";

const Programs = () => {
  return (
    <div className="programs" id="programs">
      {/* header */}
      <div className="programs-header">
        <span className="text-stroke">Explore our</span>
        <span>programs</span>
        <span className="text-stroke">to shape you</span>
      </div>

      {/* programs data */}
      <div className="program-categories">
        {programsData.map((program, i) => (
          <div className="category" key={i}>
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>Join Now </span>
              <img src={right_arrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
