import React from "react";
import matlab_logo from "../assets/images/MATLAB.png";
import csharp_logo from "../assets/images/csharp_logo.png";
import cplusplus_logo from "../assets/images/c++_logo.png";
import java_logo from "../assets/images/java_logo.png";
import python_logo from "../assets/images/python_logo.png"
import mysql from "../assets/images/mysql_logo.png";
import firebase from "../assets/images/firebase_logo.png";
import PostgreSQL from "../assets/images/PostgreSQL.png";
import monogdb from "../assets/images/mongoDB_logo.png";
import Hadoop from "../assets/images/Hadoop.png"
import html_logo from "../assets/images/html_logo.png";
import react_logo from "../assets/images/react_logo.png";
import Kubernetes_logo from "../assets/images/Kubernetes.png";
import nodejs_logo from "../assets/images/nodejs_logo.png";
import dotnet_logo from "../assets/images/dotnet.png";
import flask_logo from "../assets/images/flask_logo.png";
import docker_logo from "../assets/images/Docker.png";
import tailwind_logo from "../assets/images/tailwind_logo.png";
import git_logo from "../assets/images/git_logo.png";
import aws_logo from "../assets/images/aws_logo.png"
import azure_logo from "../assets/images/Azure.svg"
import kafka_logo from "../assets/images/ApacheKafka.png";
import Visual_studio from "../assets/images/Visual Studio.png";
import tableau from "../assets/images/Tableau.png"
import { Fade } from "react-reveal";
const Skills = () => {
  return (
    <>
      <div className="div-item div-item-left" id="skills">
        <h1 className="item-header-text">Skills</h1>
        <Fade>
          <div className="skill-section">
            <h2>Languages</h2>
            <div className="skill-items">
            <div className="skill-item">
                <div className="skill-img-plane">
                  <div className="skill-img">
                    <img src={python_logo} alt="python"></img>
                  </div>
                </div>
                <div className="skill-text">Python</div>
              </div>
              <div className="skill-item">
                <div className="skill-img-plane">
                  <div className="skill-img">
                    <img src={csharp_logo} alt="c#"></img>
                  </div>
                </div>
                <div className="skill-text">C#</div>
              </div>
              <div className="skill-item">
                <div className="skill-img-plane">
                  <div className="skill-img">
                    <img src={cplusplus_logo} alt="c++"></img>
                  </div>
                </div>
                <div className="skill-text">C++</div>
              </div>
              
              
              <div className="skill-item">
                <div className="skill-img-plane">
                  <div className="skill-img">
                    <img src={java_logo} alt="java"></img>
                  </div>
                </div>
                <div className="skill-text">Java</div>
              </div>
              <div className="skill-item">
                <div className="skill-img-plane">
                  <div className="skill-img">
                    <img src={matlab_logo} alt="matlab"></img>
                  </div>
                </div>
                <div className="skill-text">MATLAB</div>
              </div>
              
              
            </div>
          </div>

          <div className="skill-section">
            <h2>Databases</h2>
            <div className="skill-items">
              
              <div className="skill-item">
                <div className="skill-img-plane">
                  <div className="skill-img">
                    <img src={mysql} alt="sql"></img>
                  </div>
                </div>
                <div className="skill-text">MySQL</div>
              </div>
              <div className="skill-item">
                <div className="skill-img-plane">
                  <div className="skill-img">
                    <img src={PostgreSQL} alt="postgreSQL"></img>
                  </div>
                </div>
                <div className="skill-text">PostgreSQL</div>
              </div>
              <div className="skill-item">
                <div className="skill-img-plane">
                  <div className="skill-img">
                    <img src={Hadoop} alt="hadoop"></img>
                  </div>
                </div>
                <div className="skill-text">Hadoop</div>
              </div>
              <div className="skill-item">
                <div className="skill-img-plane">
                  <div className="skill-img">
                    <img src={monogdb} alt="mongo"></img>
                  </div>
                </div>
                <div className="skill-text">MongoDB</div>
              </div>
              <div className="skill-item">
                <div className="skill-img-plane">
                  <div className="skill-img">
                    <img src={firebase} alt="fire"></img>
                  </div>
                </div>
                <div className="skill-text">Firebase</div>
              </div>
            </div>
          </div>

          <div className="skill-section">
            <h2>Web Development</h2>
            <div className="skill-items">
              <div className="skill-item">
                <div className="skill-img-plane">
                  <div className="skill-img">
                    <img src={html_logo} alt="html"></img>
                  </div>
                </div>
                <div className="skill-text">HTML</div>
              </div>
              <div className="skill-item">
                <div className="skill-img-plane">
                  <div className="skill-img">
                    <img src={tailwind_logo} alt="tailwind"></img>
                  </div>
                </div>
                <div className="skill-text">Tailwind CSS</div>
              </div>
              <div className="skill-item">
                <div className="skill-img-plane">
                  <div className="skill-img">
                    <img src={react_logo} alt="react"></img>
                  </div>
                </div>
                <div className="skill-text">React</div>
              </div>
              <div className="skill-item">
                <div className="skill-img-plane">
                  <div className="skill-img">
                    <img src={nodejs_logo} alt="node"></img>
                  </div>
                </div>
                <div className="skill-text">Node JS</div>
              </div>
              <div className="skill-item">
                <div className="skill-img-plane">
                  <div className="skill-img">
                    <img src={dotnet_logo} alt="dotnet"></img>
                  </div>
                </div>
                <div className="skill-text">.NET</div>
              </div>
              <div className="skill-item">
                <div className="skill-img-plane">
                  <div className="skill-img">
                    <img src={flask_logo} alt="flask"></img>
                  </div>
                </div>
                <div className="skill-text">Flask</div>
              </div>
              <div className="skill-item">
                <div className="skill-img-plane">
                  <div className="skill-img">
                    <img src={docker_logo} alt="docker"></img>
                  </div>
                </div>
                <div className="skill-text">Docker</div>
              </div>
              <div className="skill-item">
                <div className="skill-img-plane">
                  <div className="skill-img">
                    <img src={Kubernetes_logo} alt="kubernetes"></img>
                  </div>
                </div>
                <div className="skill-text">Kubernetes</div>
              </div>
            </div>
          </div>
          <div className="skill-section">
            <h2>Others</h2>
            <div className="skill-items">
            <div className="skill-item">
                <div className="skill-img-plane">
                  <div className="skill-img">
                    <img src={aws_logo} alt="aws"></img>
                  </div>
                </div>
                <div className="skill-text">AWS</div>
              </div>
              <div className="skill-item">
                <div className="skill-img-plane">
                  <div className="skill-img">
                    <img src={azure_logo} alt="azure"></img>
                  </div>
                </div>
                <div className="skill-text">Azure</div>
              </div>
              <div className="skill-item">
                <div className="skill-img-plane">
                  <div className="skill-img">
                    <img src={kafka_logo} alt="kafka"></img>
                  </div>
                </div>
                <div className="skill-text">Apache Kafka</div>
              </div>
              <div className="skill-item">
                <div className="skill-img-plane">
                  <div className="skill-img">
                    <img src={Visual_studio} alt="visual studio"></img>
                  </div>
                </div>
                <div className="skill-text">Visual Studio</div>
              </div>
              <div className="skill-item">
                <div className="skill-img-plane">
                  <div className="skill-img">
                    <img src={tableau} alt="tableau"></img>
                  </div>
                </div>
                <div className="skill-text">Tableau</div>
              </div>
              <div className="skill-item">
                <div className="skill-img-plane">
                  <div className="skill-img">
                    <img src={git_logo} alt="git"></img>
                  </div>
                </div>
                <div className="skill-text">Git</div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Skills;
