import React from "react";
import { FaExternalLinkAlt, FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiJavascript, SiMongodb } from "react-icons/si";
import "../styles/project.css";

const Internship = () => {
  const internships = [
    {
      title: "MERN Stack Intern",
      description:
        "Developed during my internship at Infosys Springboard, this health application focuses on preventive healthcare and wellness tracking. Built with modern web technologies to provide users with comprehensive health monitoring tools.",
      technologies: [
        { name: "React", icon: FaReact, color: "#61dafb" },
        { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
        { name: "ExpressJS", icon: SiExpress, color: "#000000" },
        { name: "NodeJS", icon: FaNodeJs, color: "#339933" },
        { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
      ],
      features: [
        "Real-time tracking of vital health metrics such as BMI, hydration, and physical activity",
        "Personalized wellness recommendations based on user input and progress patterns",
        "Detailed user progress analytics with interactive charts and performance indicators",
        "Intuitive dashboard UI for seamless navigation and user engagement",
        "Fully responsive design optimized for mobile, tablet, and desktop experiences",
      ],
      certificate:
        "https://drive.google.com/file/d/15G1su1dcE3r-ElwSFJzUsrhZpwwP199J/view?usp=drive_link",
      githubLink:
        "https://github.com/springboardmentor-104/HealthCheckPro_Infosys_Internship_Mar2025/tree/milestone-4",
      category: "Internship",
    },
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Experience</h2>

        <div className="projects-grid">
          {internships.map((project, index) => (
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
                <a
                  href={project.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <FaExternalLinkAlt />
                  Certificate
                </a>
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
      </div>
    </section>
  );
};

export default Internship;
