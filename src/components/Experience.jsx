import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const color = "linear-gradient(90deg, rgb(35, 35, 35) 0%, rgb(55, 55, 55) 100%)";
const Experience = () => {
  return (
    <div className="div-item div-item-left" id="experience">
      <h1>Experience</h1>
      <style>{`
        .vertical-timeline {
          max-width: 1600px !important;
        }
      `}</style>
      <VerticalTimeline className="experience-items">
      <VerticalTimelineElement
          className="vertical-timeline-element--work experience-item"
          contentStyle={{
            background: `${color}`,
            color: "#fff",
            borderRadius: "1rem",
          }}
          contentArrowStyle={{ borderRight: `10px solid  #fff` }}
          date="May 2024 - Dec 2024"
          iconStyle={{ background: `${color}`, color: "#fff" }}>
          <h3
            className="vertical-timeline-element-title"
            style={{ fontSize: "1.2rem" }}
          >
            Software Developer Intern - Bloom Insurance
          </h3>
          <h5 style={{ marginTop: "4px", fontSize: "0.9rem" }}>
            Bloomington, Indiana
          </h5>
      </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work experience-item"
          contentStyle={{
            background: `${color}`,
            color: "#fff",
            borderRadius: "1rem",
          }}
          contentArrowStyle={{ borderRight: `10px solid  #fff` }}
          date="Jun 2022 - July 2023"
          iconStyle={{ background: `${color}`, color: "#fff" }}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{ fontSize: "1.2rem" }}
          >
            Software Engineer (EDG Team)
          </h3>
          <h5 style={{ marginTop: "4px", fontSize: "0.9rem" }}>
            Hyderabad, Telangana
          </h5>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work experience-item"
          contentStyle={{
            background: `${color}`,
            color: "#fff",
            borderRadius: "1rem",
          }}
          contentArrowStyle={{ borderRight: `10px solid  #fff` }}
          date="Jan 2021 - Apr 2021"
          iconStyle={{ background: `${color}`, color: "#fff" }}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{ fontSize: "1.2rem" }}
          >
            Software Developer Intern - We Switched Studio
          </h3>
          <h5 style={{ marginTop: "4px", fontSize: "0.9rem" }}>
            Bangalore, Karnataka
          </h5>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work experience-item"
          contentStyle={{
            background: `${color}`,
            color: "#fff",
            borderRadius: "1rem",
          }}
          contentArrowStyle={{ borderRight: `10px solid  #fff` }}
          date="Dec 2018 - Dec 2020"
          iconStyle={{ background: `${color}`, color: "#fff" }}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{ fontSize: "1.2rem" }}
          >
            Web Developer - Cyber Labs
          </h3>
          <h5 style={{ marginTop: "4px", fontSize: "0.9rem" }}>
            IIT Dhanbad, Jharkhand
          </h5>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
