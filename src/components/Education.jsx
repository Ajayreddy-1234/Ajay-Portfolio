import React from "react";
import { Grid } from "@mui/material";
import educationSVG from "../assets/images/Learning-cuate.svg";
import { Fade } from "react-reveal";
const Education = () => {
  return (
    <>
      <div className="div-item education" id="education">
        <h1>Education</h1>
        <Fade left>
          <Grid container spacing={1}>
            <Grid item sm={12} md={6}>
              <div className="education-items">
                <div className="education-item">
                  <h2>Indiana University, Bloomington</h2>
                  <h3>Masters in Computer Science</h3>
                  <h3>2023 - 2025</h3>
                  <p>GPA - 3.93 / 4.00</p>
                </div>
                <div className="education-item">
                  <h2>Indian Institute of Technology (IIT), Dhanbad</h2>
                  <h3>Bachelors in Technology</h3>
                  <h3>2018 - 2022</h3>
                  <p>GPA - 8.11 / 10.00</p>
                </div>
              </div>
            </Grid>
            <Grid item sm={12} md={6}>
              <div className="education-img">
                <img src={educationSVG} alt="education"></img>
              </div>
            </Grid>
          </Grid>
        </Fade>
      </div>
    </>
  );
};

export default Education;
