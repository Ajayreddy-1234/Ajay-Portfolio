import { Grid } from "@mui/material";
import React from "react";
import profileImage from "../assets/images/Opt_1.JPG";
import ProfileIcons from "./ProfileIcons";
import { Fade } from "react-reveal";
import { TypeAnimation } from 'react-type-animation';
const ShowTitle = () => {

  return (
      <TypeAnimation sequence={["Hi, I'm Ajay",6000,"",1000]} className="item-header-text" speed={400} wrapper="h1" repeat={Infinity}/>
  );
}
const About = () => {
  return (
    <>
      <Grid className="div-item about" id="about" container spacing={1}>
        <Grid item xs={12} md={6}>
          <Fade top big>
            <div className="div-item-left">
              <ShowTitle/>
              <p
                className="item-text"
                style={{ marginTop: "2rem", lineHeight: "40px" }}
              >
                A Software Development Engineer. I'm a Computer Science graduate from Indiana University. 
                I'm Passionate about Competitive Programming and Full
                Stack Web Development, having experience of end-to-end system design and crafting resilient cloud architectures.
                Driven by a passion for continuous improvement, I love pushing boundaries and delivering real-world impact.
              </p>
              <ProfileIcons />
              <a
                href="https://drive.google.com/file/d/1n-m3nlHg0bbgRIe_ZaOlC8-XZza0aaSa/view?usp=sharing"
                target="__blank"
              >
                <button className="btn">SEE MY RESUME</button>
              </a>
            </div>
          </Fade>
        </Grid>
        <Grid item xs={12} md={6}>
          <Fade top big>
            <div className="div-item-right">
              <img
                className="profile-image"
                src={profileImage}
                alt="Profile"
              ></img>
            </div>
          </Fade>
        </Grid>
      </Grid>
    </>
  );
};

export default About;
