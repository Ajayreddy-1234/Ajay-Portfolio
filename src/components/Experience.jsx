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
          <hr style={{margin: "12px 0 0 0"}}></hr>
          <p style={{ lineHeight: "1.2rem" }}>
          Developed a comprehensive MVC solution that centralized key metrics, streamlined workflows, and significantly reduced manual effort. <br></br><br></br>
          Coordinated with cross-functional teams to rapidly address critical issues and enhance overall system reliability through best practices and modular design.
          </p>
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
          <hr style={{margin: "12px 0 0 0"}}></hr>
          <p style={{ lineHeight: "1.2rem" }}>
          Collaborated on a scalable backend for MATLAB Answers that drove $2M in revenue and enhanced query resolution by identifying load bottlenecks and leveraging multi-threading to reduce response times. <br></br> <br></br>
          Streamlined deployments using IaC with Terraform, containerization with Docker, orchestration with Kubernetes and Redis caching, and ensured zero downtime through DAPR-powered distributed messaging.
          </p>
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
          <hr style={{margin: "12px 0 0 0"}}></hr>
          <p style={{ lineHeight: "1.2rem" }}>
          Developed an OAuth2-based SSO solution using Angular to unify login flows and streamline user registrations, while creating robust middleware for error handling and validation.<br></br><br></br>
          Enhanced platform scalability with a microservices architecture and cloud load balancing, integrated Google Calendar sync with role-based admin panels for improved navigation, and built a web-based time tracker to automate administrative tasks.
          </p>
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
          <hr style={{margin: "12px 0 0 0"}}></hr>
          <p style={{ lineHeight: "1.2rem" }}>
          Mentoring students in website and app development at Cyber Labs, IIT Dhanbad not only allowed me to share practical insights but also honed my own technical and leadership skills.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
