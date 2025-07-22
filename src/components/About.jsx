import React from "react";
import { FaMapMarkerAlt, FaHandsHelping } from "react-icons/fa";
import "../styles/about.css";
const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-text">
            <p className="intro">
              I'm a passionate B.Tech Computer Science Engineering graduate with
              a strong foundation in software development and web technologies.
              My journey in tech began with curiosity about how digital
              solutions can solve real-world problems.
            </p>

            <p>
              With expertise in Java, JavaScript, and ReactJS, I enjoy creating
              efficient, user-friendly applications that make a difference. I'm
              particularly drawn to web development and cybersecurity, where I
              can combine my technical skills with creative problem-solving.
            </p>

            <div className="personal-info">
              <div className="info-item">
                <FaMapMarkerAlt className="info-icon" />
                <span>Hyderabad, India</span>
              </div>
            </div>
          </div>

          <div className="about-highlights">
            <div className="highlight-card">
              <h3>Education</h3>
              <p>B.Tech in Computer Science Engineering</p>
              <p>CGPA: 7.32</p>
            </div>

            <div className="highlight-card">
              <h3>LeetCode Stats</h3>
              <p>200+ Problems Solved</p>
              <p>Consistent Problem Solver</p>
            </div>

            <div className="highlight-card">
              <h3>Community Service</h3>
              <div className="nss-info">
                <FaHandsHelping className="nss-icon" />
                <div>
                  <p>
                    <strong>NSS Volunteer</strong>
                  </p>
                  <p>Active participant in National Service Scheme</p>
                  <p>Contributed to community development initiatives</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
