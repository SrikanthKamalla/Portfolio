import React from "react";
import { FaExternalLinkAlt, FaGithub, FaReact, FaNode } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiRedux,
  SiGooglemaps,
} from "react-icons/si";
import "../styles/project.css";

const Projects = () => {
  const projects = [
    {
      title: "Snapnest",
      description:
        "A dynamic social media application built using the MERN stack with advanced state management via Redux Toolkit and Thunk. The platform allows users to create profiles, post updates, comment, and interact with a real-time newsfeed. Designed with responsiveness and scalability in mind, it provides an engaging and seamless user experience.",
      technologies: [
        { name: "React", icon: FaReact, color: "#61dafb" },
        { name: "Redux", icon: SiRedux, color: "#764abc" },
        { name: "Thunk", icon: SiRedux, color: "#764abc" },
        { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
        { name: "Node.js", icon: FaNode, color: "#339933" },
        { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
        { name: "Express", icon: SiExpress, color: "#000000" },
      ],
      features: [
        "User authentication and profile creation",
        "Post creation, likes, and commenting system",
        "Real-time feed updates and user interactions",
        "Centralized state management using Redux Toolkit and Thunk",
        "Responsive UI for mobile and desktop",
        "Secure backend with JWT authentication",
      ],
      liveLink: "https://snapnest-phi.vercel.app/",
      githubLink: "https://github.com/SrikanthKamalla/SnapNest",
      category: "Full Stack",
    },
    {
      title: "Meet in the Middle",
      description:
        "A location-based web application that helps multiple users find a fair and convenient offline meeting point. The system calculates a central meeting location based on participants’ live or shared locations and visualizes it on an interactive map, making group meetups easier and more efficient.",
      technologies: [
        { name: "React", icon: FaReact, color: "#61dafb" },
        { name: "Redux", icon: SiRedux, color: "#764abc" },
        { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
        { name: "Node.js", icon: FaNode, color: "#339933" },
        { name: "Express", icon: SiExpress, color: "#000000" },
        { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
        { name: "Google Maps API", icon: SiGooglemaps, color: "#4285F4" },
      ],
      features: [
        "Create and join group meetups",
        "Collect participant locations securely",
        "Calculate a central meeting point for fairness",
        "Interactive map visualization using Google Maps",
        "Redux-based centralized state management",
        "Google OAuth authentication for quick and secure user login",
        "Mobile-friendly and responsive UI",
      ],
      liveLink: "",
      githubLink:
        "https://github.com/SrikanthKamalla/MeetInTheMiddle-Frontend.git", // add repo link if public
      category: "Full Stack",
    },
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <div className="project-category">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>

              <div className="project-technologies">
                <h4>Technologies Used:</h4>
                <div className="tech-list">
                  {project.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="tech-item">
                      <tech.icon style={{ color: tech.color }} />
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="project-features">
                <h4>Key Features:</h4>
                <ul className="features-list">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="project-links">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                )}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <FaGithub />
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <p>Interested in seeing more of my work?</p>
          <a
            href="https://github.com/srikanthkamalla"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <FaGithub />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
